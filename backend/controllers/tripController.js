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

        console.log('name, description, price, itinerary, inclusion, exclusion, otherDetails, reviews, topFlag, recommendedSeason: ', name, description, price, itinerary, inclusion, exclusion, otherDetails, reviews, topFlag, recommendedSeason);
        console.log('image1: ', imageUrl);

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
            inclusion: JSON.parse(inclusion),
            exclusion: JSON.parse(exclusion),
            otherDetails: JSON.parse(otherDetails),
            reviews: JSON.parse(reviews),
            topFlag: topFlag === 'true' ? true : false,
            recommendedSeason: JSON.parse(recommendedSeason),
        }
        console.log('tripData: ', tripData);

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
        const { id } = req.body;
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

export { addTrip, removeTrip, listTrip, singleTrip }