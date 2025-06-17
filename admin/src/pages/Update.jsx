import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom'; // Import for routing

const Update = ({ token }) => {
    // Get trip ID from URL
    const { id } = useParams();
    const navigate = useNavigate();

    // Image states (similar to Add)
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);
    const [image5, setImage5] = useState(false);
    const [image6, setImage6] = useState(false);
    const [image7, setImage7] = useState(false);
    const [image8, setImage8] = useState(false);
    const [image9, setImage9] = useState(false);
    const [image10, setImage10] = useState(false);

    // Array to hold image states for easier mapping
    const imageStates = [
        { state: image1, setter: setImage1, name: "image1" },
        { state: image2, setter: setImage2, name: "image2" },
        { state: image3, setter: setImage3, name: "image3" },
        { state: image4, setter: setImage4, name: "image4" },
        { state: image5, setter: setImage5, name: "image5" },
        { state: image6, setter: setImage6, name: "image6" },
        { state: image7, setter: setImage7, name: "image7" },
        { state: image8, setter: setImage8, name: "image8" },
        { state: image9, setter: setImage9, name: "image9" },
        { state: image10, setter: setImage10, name: "image10" },
    ];

    // Basic trip info states
    const [tripName, setTripName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [pickup, setPickUp] = useState("");
    const [drop, setDrop] = useState('');
    const [season, setSeason] = useState([]);
    const [topTrip, setTopTrip] = useState(false);
    const [currentImages, setCurrentImages] = useState([]); // To store existing image URLs

    // Array states
    const [itinerary, setItinerary] = useState([{
        day: 1,
        description: "",
        activities: [""]
    }]);
    const [inclusions, setInclusions] = useState([""]);
    const [exclusions, setExclusions] = useState([""]);
    const [otherDetails, setOtherDetails] = useState([""]);
    const [reviews, setReviews] = useState([{
        user: "",
        rate: "",
        comment: ""
    }]);

    // Loading state
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true); // New state for initial data fetch

    // --- Handlers (mostly same as Add.jsx) ---
    const handleItineraryChange = (index, field, value) => {
        const updatedItinerary = [...itinerary];
        updatedItinerary[index][field] = value;
        setItinerary(updatedItinerary);
    };

    const handleActivityChange = (dayIndex, activityIndex, value) => {
        const updatedItinerary = [...itinerary];
        updatedItinerary[dayIndex].activities[activityIndex] = value;
        setItinerary(updatedItinerary);
    };

    const addActivity = (dayIndex) => {
        const updatedItinerary = [...itinerary];
        updatedItinerary[dayIndex].activities.push("");
        setItinerary(updatedItinerary);
    };

    const removeActivity = (dayIndex, activityIndex) => {
        const updatedItinerary = [...itinerary];
        updatedItinerary[dayIndex].activities.splice(activityIndex, 1);
        setItinerary(updatedItinerary);
    };

    const addItineraryDay = () => {
        setItinerary([...itinerary, {
            day: itinerary.length + 1,
            description: "",
            activities: [""]
        }]);
    };

    const removeItineraryDay = (index) => {
        const updatedItinerary = [...itinerary];
        updatedItinerary.splice(index, 1);
        const renumberedItinerary = updatedItinerary.map((item, i) => ({
            ...item,
            day: i + 1
        }));
        setItinerary(renumberedItinerary);
    };

    const handleInclusionChange = (index, value) => {
        const updatedInclusions = [...inclusions];
        updatedInclusions[index] = value;
        setInclusions(updatedInclusions);
    };

    const addInclusion = () => {
        setInclusions([...inclusions, ""]);
    };

    const removeInclusion = (index) => {
        const updatedInclusions = [...inclusions];
        updatedInclusions.splice(index, 1);
        setInclusions(updatedInclusions);
    };

    const handleExclusionChange = (index, value) => {
        const updatedExclusions = [...exclusions];
        updatedExclusions[index] = value;
        setExclusions(updatedExclusions);
    };

    const addExclusion = () => {
        setExclusions([...exclusions, ""]);
    };

    const removeExclusion = (index) => {
        const updatedExclusions = [...exclusions];
        updatedExclusions.splice(index, 1);
        setExclusions(updatedExclusions);
    };

    const handleOtherDetailChange = (index, value) => {
        const updatedOtherDetails = [...otherDetails];
        updatedOtherDetails[index] = value;
        setOtherDetails(updatedOtherDetails);
    };

    const addOtherDetail = () => {
        setOtherDetails([...otherDetails, ""]);
    };

    const removeOtherDetail = (index) => {
        const updatedOtherDetails = [...otherDetails];
        updatedOtherDetails.splice(index, 1);
        setOtherDetails(updatedOtherDetails);
    };

    const handleReviewChange = (index, field, value) => {
        const updatedReviews = [...reviews];
        updatedReviews[index][field] = value;
        setReviews(updatedReviews);
    };

    const addReview = () => {
        setReviews([...reviews, { user: "", rate: "", comment: "" }]);
    };

    const removeReview = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(index, 1);
        setReviews(updatedReviews);
    };

    const toggleSeason = (seasonName) => {
        setSeason(prev =>
            prev.includes(seasonName)
                ? prev.filter(item => item !== seasonName)
                : [...prev, seasonName]
        );
    };

    // --- Fetching Existing Trip Data ---
    useEffect(() => {
        const fetchTripData = async () => {
            setIsFetching(true);
            try {
                const response = await axios.get(`${backendUrl}/api/trip/single/${id}`, {
                    headers: {
                        token: token,
                    },
                });
                if (response.data.success) {
                    const tripData = response.data.trip;
                    setTripName(tripData.name);
                    setDescription(tripData.description);
                    setPrice(tripData.price);
                    setDuration(tripData.duration);
                    setPickUp(tripData.pickUp);
                    setDrop(tripData.drop);
                    setSeason(tripData.recommendedSeason || []);
                    setTopTrip(tripData.topFlag);
                    setItinerary(tripData.itinerary || [{ day: 1, description: "", activities: [""] }]);
                    setInclusions(tripData.inclusions && tripData.inclusions.length > 0 ? tripData.inclusions : [""]);
                    setExclusions(tripData.exclusions && tripData.exclusions.length > 0 ? tripData.exclusions : [""]);
                    setOtherDetails(tripData.otherDetails && tripData.otherDetails.length > 0 ? tripData.otherDetails : [""]);
                    setReviews(tripData.reviews && tripData.reviews.length > 0 ? tripData.reviews : [{ user: "", rate: "", comment: "" }]);

                    // Set existing images
                    setCurrentImages(tripData.images || []);
                } else {
                    toast.error("Failed to fetch trip data.");
                    navigate('/list'); // Redirect if data fetch fails
                }
            } catch (error) {
                console.error('Error fetching trip data:', error);
                toast.error("Error fetching trip data.");
                navigate('/list'); // Redirect on error
            } finally {
                setIsFetching(false);
            }
        };
        if (id && token) {
            fetchTripData();
        }
    }, [id, token, navigate]);


    // --- Form Submission Handler (Modified for Update) ---
    const onSubmithandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("name", tripName);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("duration", duration);
            formData.append("pickUp", pickup);
            formData.append("drop", drop);
            formData.append("recommendedSeason", JSON.stringify(season));
            formData.append("topFlag", topTrip);
            formData.append("itinerary", JSON.stringify(itinerary));
            formData.append("inclusion", JSON.stringify(inclusions.filter(item => item.trim() !== "")));
            formData.append("exclusion", JSON.stringify(exclusions.filter(item => item.trim() !== "")));
            formData.append("otherDetails", JSON.stringify(otherDetails.filter(item => item.trim() !== "")));
            formData.append("reviews", JSON.stringify(reviews));

            // Append new images
            imageStates.forEach((imgState, index) => {
                if (imgState.state) {
                    formData.append(imgState.name, imgState.state);
                }
                else {
                    // If no new image is selected, append the existing image URL
                    if (currentImages[index]) {
                        formData.append(imgState.name, currentImages[index]);
                    }
                }
            });

            // Append current images (if they are URLs, they need a different backend approach
            // or you re-upload them if they were modified)
            // For simplicity, let's assume currentImages are sent as a separate array of URLs
            // that the backend will merge/handle. This might need backend adjustment.
            formData.append("currentImages", JSON.stringify(currentImages));


            const response = await axios.put(`${backendUrl}/api/trip/update/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: token,
                }
            });

            if (response.data.success) {
                toast.success("Trip updated successfully!");
                navigate('/list'); // Navigate back to the list after successful update
            } else {
                toast.error("Failed to update trip. " + (response.data.message || "Please try again."));
            }
        } catch (error) {
            console.error('Error updating trip: ', error);
            toast.error("Failed to update trip. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isFetching) {
        return (
            <div className='flex items-center justify-center min-h-[calc(100vh-80px)]'>
                <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500'></div>
                <p className='ml-4 text-lg font-medium'>Loading Trip Data...</p>
            </div>
        );
    }

    return (
        <div className='relative p-4 md:p-8 bg-gray-100 min-h-screen'>
            {isLoading && (
                <div className='absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 rounded-lg'>
                    <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500'></div>
                    <p className='ml-4 text-lg font-medium'>Updating Trip...</p>
                </div>
            )}
            <form onSubmit={onSubmithandler} className='flex flex-col w-full items-start gap-6 max-w-4xl mx-auto'>
                {/* Image Upload Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-800'>Trip Images</h2>
                    <p className='mb-3 text-gray-600'>Upload new images or manage existing ones (max 10).</p>
                    <div className='flex flex-wrap gap-4 pb-2'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                            const imageState = eval(`image${num}`);
                            const setImageState = eval(`setImage${num}`);
                            return (
                                <label key={num} htmlFor={`image${num}`} className='flex-shrink-0'>
                                    <div className='w-20 h-20 border rounded-md flex items-center justify-center overflow-hidden'>
                                        {!imageState ? (
                                            <img className='w-full h-full object-cover' src={currentImages[num-1]} alt="Upload" />
                                        ) : (
                                            <img className='w-full h-full object-cover' src={URL.createObjectURL(imageState)} alt={`Preview ${num}`} />
                                        )}
                                    </div>
                                    <input
                                        onChange={(e) => setImageState(e.target.files[0])}
                                        type="file"
                                        id={`image${num}`}
                                        hidden
                                        accept="image/*"
                                    />
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* Basic Information Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-800'>Basic Information</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>Trip Name</label>
                            <input
                                onChange={(e) => setTripName(e.target.value)}
                                value={tripName}
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                type='text'
                                placeholder='Type here'
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>Trip Price (₹)</label>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                type='number'
                                placeholder='21000'
                                required
                                min="0"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>Trip Duration</label>
                            <input
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                type='text'
                                placeholder='5N/6D'
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>Pick-Up Location</label>
                            <input
                                onChange={(e) => setPickUp(e.target.value)}
                                value={pickup}
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                type='text'
                                placeholder='Guwahati'
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>Drop Location</label>
                            <input
                                onChange={(e) => setDrop(e.target.value)}
                                value={drop}
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                type='text'
                                placeholder='Guwahati'
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className='mt-6'>
                        <label className='block mb-2 font-medium text-gray-700'>Trip Description</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]'
                            placeholder='Write detailed description here'
                            required
                            disabled={isLoading}
                        ></textarea>
                    </div>

                    <div className='mt-6'>
                        <label className='block mb-3 font-medium text-gray-700'>Recommended Seasons</label>
                        <div className='flex flex-wrap gap-3'>
                            {['Summer', 'Winter', 'Monsoon'].map((seasonName) => (
                                <div
                                    key={seasonName}
                                    onClick={() => !isLoading && toggleSeason(seasonName)}
                                    className={`px-4 py-2 rounded-full cursor-pointer transition-colors text-sm ${season.includes(seasonName)
                                        ? 'bg-blue-600 text-white shadow'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                                >
                                    {seasonName}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mt-6'>
                        <input
                            onChange={() => !isLoading && setTopTrip(prev => !prev)}
                            checked={topTrip}
                            type="checkbox"
                            id='topTrip'
                            className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                            disabled={isLoading}
                        />
                        <label className='font-medium text-gray-700 cursor-pointer' htmlFor='topTrip'>
                            Mark as Top Trip
                        </label>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-xl font-semibold text-gray-800'>Itinerary</h2>
                    </div>

                    {itinerary.map((day, dayIndex) => (
                        <div key={dayIndex} className='mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50'>
                            <div className='flex justify-between items-center mb-3'>
                                <h3 className='font-bold text-lg text-gray-800'>Day {day.day}</h3>
                                <button
                                    type="button"
                                    onClick={() => removeItineraryDay(dayIndex)}
                                    className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                    disabled={itinerary.length <= 1 || isLoading}
                                >
                                    Remove Day
                                </button>
                            </div>

                            <div className='mb-4'>
                                <label className='block mb-2 font-medium text-gray-700'>Description</label>
                                <textarea
                                    value={day.description}
                                    onChange={(e) => handleItineraryChange(dayIndex, 'description', e.target.value)}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Day description'
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label className='block mb-2 font-medium text-gray-700'>Activities</label>
                                {day.activities.map((activity, activityIndex) => (
                                    <div key={activityIndex} className='flex flex-col sm:flex-row gap-2 mb-3 items-center'>
                                        <input
                                            type='text'
                                            value={activity}
                                            onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
                                            className='flex-1 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                            placeholder={`Activity ${activityIndex + 1}`}
                                            required
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeActivity(dayIndex, activityIndex)}
                                            className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                            disabled={day.activities.length <= 1 || isLoading}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addActivity(dayIndex)}
                                    className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                    disabled={isLoading}
                                >
                                    Add Activity
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addItineraryDay}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        Add Day
                    </button>
                </div>

                {/* Inclusions Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-800'>Inclusions</h2>
                    {inclusions.map((inclusion, index) => (
                        <div key={index} className='flex flex-col sm:flex-row gap-2 mb-3 items-center'>
                            <input
                                type='text'
                                value={inclusion}
                                onChange={(e) => handleInclusionChange(index, e.target.value)}
                                className='flex-1 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Inclusion'
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => removeInclusion(index)}
                                className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                disabled={inclusions.length <= 1 || isLoading}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addInclusion}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        Add Inclusion
                    </button>
                </div>

                {/* Exclusions Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-800'>Exclusions</h2>
                    {exclusions.map((exclusion, index) => (
                        <div key={index} className='flex flex-col sm:flex-row gap-2 mb-3 items-center'>
                            <input
                                type='text'
                                value={exclusion}
                                onChange={(e) => handleExclusionChange(index, e.target.value)}
                                className='flex-1 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Exclusion'
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => removeExclusion(index)}
                                className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                disabled={exclusions.length <= 1 || isLoading}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addExclusion}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        Add Exclusion
                    </button>
                </div>

                {/* Other Details Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-800'>Other Details</h2>
                    {otherDetails.map((detail, index) => (
                        <div key={index} className='flex flex-col sm:flex-row gap-2 mb-3 items-center'>
                            <input
                                type='text'
                                value={detail}
                                onChange={(e) => handleOtherDetailChange(index, e.target.value)}
                                className='flex-1 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Other detail'
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => removeOtherDetail(index)}
                                className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                disabled={otherDetails.length <= 1 || isLoading}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addOtherDetail}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        Add Detail
                    </button>
                </div>

                {/* Reviews Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4 text-gray-800'>Reviews</h2>
                    {reviews.map((review, index) => (
                        <div key={index} className='mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50'>
                            <div className='flex justify-between items-center mb-3'>
                                <h3 className='font-bold text-gray-800'>Review {index + 1}</h3>
                                <button
                                    type="button"
                                    onClick={() => removeReview(index)}
                                    className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                    disabled={reviews.length <= 1 || isLoading}
                                >
                                    Remove Review
                                </button>
                            </div>

                            <div className='mb-3'>
                                <label className='block mb-2 font-medium text-gray-700'>User Name</label>
                                <input
                                    type='text'
                                    value={review.user}
                                    onChange={(e) => handleReviewChange(index, 'user', e.target.value)}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='User name'
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className='mb-3'>
                                <label className='block mb-2 font-medium text-gray-700'>Rating (0-5)</label>
                                <input
                                    type='number'
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    value={review.rate}
                                    onChange={(e) => handleReviewChange(index, 'rate', e.target.value)}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Rating'
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className='mb-3'>
                                <label className='block mb-2 font-medium text-gray-700'>Comment</label>
                                <textarea
                                    value={review.comment}
                                    onChange={(e) => handleReviewChange(index, 'comment', e.target.value)}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]'
                                    placeholder='Review comment'
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addReview}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        Add Review
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    className='w-full px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isLoading}
                >
                    {isLoading ? 'UPDATING...' : 'UPDATE TRIP'}
                </button>
            </form>
        </div>
    );
};

export default Update;