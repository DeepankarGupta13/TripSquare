import tripModel from "../models/tripModel.js";
import { v2 as cloudinary } from 'cloudinary';

const addTrip = async (req, res) => {
    try {
        const { name, description, price, pickUp, drop, duration, itinerary, inclusion, exclusion, otherDetails, reviews, topFlag, recommendedSeason } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const image5 = req.files.image5 && req.files.image5[0];
        const image6 = req.files.image6 && req.files.image6[0];
        const image7 = req.files.image7 && req.files.image7[0];
        const image8 = req.files.image8 && req.files.image8[0];
        const image9 = req.files.image9 && req.files.image9[0];
        const image10 = req.files.image10 && req.files.image10[0];

        const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10].filter(ele => ele !== undefined);

        let imageUrl = await Promise.all(
            images.map(async (ele) => {
                let result = await cloudinary.uploader.upload(ele.path, { resource_type: 'image' });
                return result.secure_url;
            })
        )

        const tripData = {
            name,
            description,
            price: Number(price),
            duration,
            pickUp,
            drop,
            pic: imageUrl[0],
            images: imageUrl,
            itinerary: JSON.parse(itinerary),
            inclusions: JSON.parse(inclusion),
            exclusions: JSON.parse(exclusion),
            otherDetails: JSON.parse(otherDetails),
            reviews: JSON.parse(reviews),
            topFlag: topFlag === 'true' ? true : false,
            recommendedSeason: JSON.parse(recommendedSeason),
        }

        const trip = new tripModel(tripData);
        await trip.save()

        res.status(200).json({
            success: true,
            message: 'Trip Added Successfully'
        })
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const updateTrip = async (req, res) => {
    try {
        const { id } = req.params; // Get the trip ID from URL parameters
        const {
            name, description, price, pickUp, drop, duration,
            itinerary, inclusion, exclusion, otherDetails, reviews,
            topFlag, recommendedSeason, currentImages: currentImagesJson // Received as a JSON string from frontend
        } = req.body;

        // Find the existing trip
        const trip = await tripModel.findById(id);
        if (!trip) {
            return res.status(404).json({ success: false, message: 'Trip not found' });
        }

        // --- Image Management ---
        let updatedImageUrls = [];
        let imagesToDelete = []; // To store public_ids of images to delete from Cloudinary

        // 1. Parse currentImages from the frontend (URLs of images to keep)
        const oldImages = currentImagesJson ? JSON.parse(currentImagesJson) : [];

        // Add new images uploaded during update
        const newImagesFiles = [
            req.files.image1 && req.files.image1[0],
            req.files.image2 && req.files.image2[0],
            req.files.image3 && req.files.image3[0],
            req.files.image4 && req.files.image4[0],
            req.files.image5 && req.files.image5[0],
            req.files.image6 && req.files.image6[0],
            req.files.image7 && req.files.image7[0],
            req.files.image8 && req.files.image8[0],
            req.files.image9 && req.files.image9[0],
            req.files.image10 && req.files.image10[0],
        ].filter(ele => ele !== undefined);

        // Upload new images to Cloudinary
        let newUploadedImageUrls = await Promise.all(
            newImagesFiles.map(async (file) => {
                const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );
        
        newImagesFiles.forEach((file, ind) => {
            if (file && file.fieldname && file.fieldname.startsWith('image')) {
                const index = parseInt(file.fieldname.replace('image', ''), 10) - 1;
                if (!isNaN(index) && oldImages[index]) {
                    // Mark the old image for deletion
                    // Extract public_id from the URL (assuming Cloudinary URL format)
                    const urlParts = oldImages[index].split('/');
                    const fileName = urlParts[urlParts.length - 1];
                    const publicId = fileName.split('.')[0];
                    imagesToDelete.push(publicId);

                    // Remove the old image from the array
                    oldImages[index] = newUploadedImageUrls[ind] || null; // Replace with new image URL or null if no new image
                }
                else if (oldImages.length < 10) {
                    // If no old image, just add the new image URL
                    oldImages.push(newUploadedImageUrls[ind]);
                }
            }
        });
        // Remove nulls from oldImages
        const filteredOldImages = oldImages.filter(img => img !== null);
        oldImages.length = 0;
        filteredOldImages.forEach(img => oldImages.push(img));

        // Combine images to keep with newly uploaded images
        updatedImageUrls = [...oldImages];

        // Ensure no more than 10 images; extra images are removed and scheduled for deletion
        while (updatedImageUrls.length > 10) {
            const removedImageUrl = updatedImageUrls.pop();
            // Extract public_id from the URL (assuming Cloudinary URL format)
            if (removedImageUrl) {
                const urlParts = removedImageUrl.split('/');
                const fileName = urlParts[urlParts.length - 1];
                const publicId = fileName.split('.')[0];
                imagesToDelete.push(publicId);
            }
        }
        
        // Delete images from Cloudinary that are no longer wanted
        if (imagesToDelete.length > 0) {
            await Promise.all(
                imagesToDelete.map(async (publicId) => {
                    try {
                        await cloudinary.uploader.destroy(publicId);
                        console.log(`Deleted image from Cloudinary: ${publicId}`);
                    } catch (deleteError) {
                        console.error(`Error deleting image ${publicId} from Cloudinary:`, deleteError);
                        // Continue even if one image fails to delete, to not block the trip update
                    }
                })
            );
        }
        

        // --- Prepare Update Data ---
        const updateData = {
            name: name,
            description: description,
            price: Number(price),
            duration: duration,
            pickUp: pickUp,
            drop: drop,
            // The main pic will be the first image in the updated list, or a default if none
            pic: updatedImageUrls.length > 0 ? updatedImageUrls[0] : (trip.pic || null),
            images: updatedImageUrls,
            itinerary: JSON.parse(itinerary),
            inclusions: JSON.parse(inclusion),
            exclusions: JSON.parse(exclusion),
            otherDetails: JSON.parse(otherDetails),
            reviews: JSON.parse(reviews),
            topFlag: topFlag === 'true', // Ensure boolean
            recommendedSeason: JSON.parse(recommendedSeason),
        };

        // Update the trip in the database
        await tripModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        res.status(200).json({
            success: true,
            message: 'Trip Updated Successfully',
        });

    } catch (error) {
        console.error('Error updating trip:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to update trip: ' + error.message,
        });
    }
};

const removeTrip = async (req, res) => {
    try {
        const { id } = req.body
        await tripModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Trip Deleted Successfully"
        })
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const listTrip = async (req, res) => {
    try {
        const trips = await tripModel.find({})
        if (!trips) {
            return res.status(500).json({
                success: false,
                message: 'Trips not found'
            })
        }
        return res.status(200).json({
            success: true,
            trips,
        })
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const singleTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await tripModel.findById(id);
        res.status(200).json({
            success: true,
            trip,
        })
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export { addTrip, removeTrip, listTrip, singleTrip, updateTrip }