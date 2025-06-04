import React from 'react';
import { assets } from '../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  // Image states
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

  // Basic trip info states
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [pickup, setPickUp] = useState("");
  const [drop, setDrop] = useState('');
  const [season, setSeason] = useState([]);
  const [topTrip, setTopTrip] = useState(false);

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
  const [isLoading, setIsLoading] = useState(false); // New loading state

  // Handler functions for itinerary
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
    // Update day numbers after removal
    const renumberedItinerary = updatedItinerary.map((item, i) => ({
      ...item,
      day: i + 1
    }));
    setItinerary(renumberedItinerary);
  };

  // Handler functions for inclusions
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

  // Handler functions for exclusions
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

  // Handler functions for other details
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

  // Handler functions for reviews
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

  // Season toggle handler
  const toggleSeason = (seasonName) => {
    setSeason(prev =>
      prev.includes(seasonName)
        ? prev.filter(item => item !== seasonName)
        : [...prev, seasonName]
    );
  };

  // Form submission handler
  const onSubmithandler = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

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

      // Append images only if they exist
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      image5 && formData.append("image5", image5);
      image6 && formData.append("image6", image6);
      image7 && formData.append("image7", image7);
      image8 && formData.append("image8", image8);
      image9 && formData.append("image9", image9);
      image10 && formData.append("image10", image10);

      const response = await axios.post(backendUrl + "/api/trip/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: token,
        }
      });

      // Reset form after successful submission
      if (response.data.success) {
        toast.success("Trip added successfully!");
        // Reset all form fields
        setTripName("");
        setDescription("");
        setPrice("");
        setDuration("");
        setPickUp("");
        setDrop("");
        setSeason([]);
        setTopTrip(false);
        setItinerary([{ day: 1, description: "", activities: [""] }]);
        setInclusions([""]);
        setExclusions([""]);
        setOtherDetails([""]);
        setReviews([{ user: "", rate: "", comment: "" }]);
        // Reset images
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage9(false);
        setImage10(false);
      }
    } catch (error) {
      console.error('error: ', error);
      toast.error("Failed to add trip. Please try again.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 rounded-lg'>
          <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500'></div>
          <p className='ml-4 text-lg font-medium'>Adding Trip...</p>
        </div>
      )}
      <form onSubmit={onSubmithandler} className='flex flex-col w-full items-start gap-3 p-4'>
        {/* Image Upload Section */}
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <p className='mb-2 font-medium'>Upload Images</p>
          <div className='flex gap-2 overflow-x-auto pb-2'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
              const imageState = eval(`image${num}`);
              const setImageState = eval(`setImage${num}`);
              return (
                <label key={num} htmlFor={`image${num}`} className='flex-shrink-0'>
                  <div className='w-20 h-20 border rounded-md flex items-center justify-center overflow-hidden'>
                    {!imageState ? (
                      <img className='w-12 h-12 object-contain opacity-50' src={assets.uploadIcon} alt="Upload" />
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
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <h2 className='text-lg font-semibold mb-4'>Basic Information</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block mb-1 font-medium'>Trip Name</label>
              <input
                onChange={(e) => setTripName(e.target.value)}
                value={tripName}
                className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='text'
                placeholder='Type here'
                required
              />
            </div>

            <div>
              <label className='block mb-1 font-medium'>Trip Price (₹)</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='number'
                placeholder='21000'
                required
                min="0"
              />
            </div>

            <div>
              <label className='block mb-1 font-medium'>Trip Duration</label>
              <input
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='text'
                placeholder='5N/6D'
                required
              />
            </div>

            <div>
              <label className='block mb-1 font-medium'>Pick-Up Location</label>
              <input
                onChange={(e) => setPickUp(e.target.value)}
                value={pickup}
                className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='text'
                placeholder='Guwahati'
                required
              />
            </div>

            <div>
              <label className='block mb-1 font-medium'>Drop Location</label>
              <input
                onChange={(e) => setDrop(e.target.value)}
                value={drop}
                className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='text'
                placeholder='Guwahati'
                required
              />
            </div>
          </div>

          <div className='mt-4'>
            <label className='block mb-1 font-medium'>Trip Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]'
              placeholder='Write detailed description here'
              required
            ></textarea>
          </div>

          <div className='mt-4'>
            <label className='block mb-2 font-medium'>Recommended Seasons</label>
            <div className='flex gap-3'>
              {['Summer', 'Winter', 'Monsoon'].map((seasonName) => (
                <div
                  key={seasonName}
                  onClick={() => toggleSeason(seasonName)}
                  className={`px-3 py-1 rounded cursor-pointer transition-colors ${season.includes(seasonName)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                    }`} // Add disabled styling
                >
                  {seasonName}
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2 mt-4'>
            <input
              onChange={() => setTopTrip(prev => !prev)} // Disable checkbox when loading
              checked={topTrip}
              type="checkbox"
              id='topTrip'
              className='w-4 h-4'
            />
            <label className='font-medium cursor-pointer' htmlFor='topTrip'>
              Mark as Top Trip
            </label>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Itinerary</h2>
          </div>

          {itinerary.map((day, dayIndex) => (
            <div key={dayIndex} className='mb-6 p-4 border rounded-lg bg-gray-50'>
              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg'>Day {day.day}</h3>
                <button
                  type="button"
                  onClick={() => removeItineraryDay(dayIndex)}
                  className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors'
                >
                  Remove Day
                </button>
              </div>

              <div className='mb-4'>
                <label className='block mb-1 font-medium'>Description</label>
                <textarea
                  value={day.description}
                  onChange={(e) => handleItineraryChange(dayIndex, 'description', e.target.value)}
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Day description'
                  required
                />
              </div>

              <div>
                <label className='block mb-2 font-medium'>Activities</label>
                {day.activities.map((activity, activityIndex) => (
                  <div key={activityIndex} className='flex gap-2 mb-2'>
                    <input
                      type='text'
                      value={activity}
                      onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
                      className='flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder={`Activity ${activityIndex + 1}`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeActivity(dayIndex, activityIndex)}
                      className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors'
                      disabled={day.activities.length <= 1 || isLoading} // Disable button when loading
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addActivity(dayIndex)}
                  className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mt-2 transition-colors'
                >
                  Add Activity
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addItineraryDay}
            className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors'
          >
            Add Day
          </button>
        </div>

        {/* Inclusions Section */}
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Inclusions</h2>
          </div>

          {inclusions.map((inclusion, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={inclusion}
                onChange={(e) => handleInclusionChange(index, e.target.value)}
                className='flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Inclusion'
                required
              />
              <button
                type="button"
                onClick={() => removeInclusion(index)}
                className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors'
                disabled={inclusions.length <= 1} // Disable button when loading
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addInclusion}
            className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors'
          >
            Add Inclusion
          </button>
        </div>

        {/* Exclusions Section */}
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Exclusions</h2>
          </div>

          {exclusions.map((exclusion, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={exclusion}
                onChange={(e) => handleExclusionChange(index, e.target.value)}
                className='flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Exclusion'
                required
              />
              <button
                type="button"
                onClick={() => removeExclusion(index)}
                className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors'
                disabled={exclusions.length <= 1} // Disable button when loading
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExclusion}
            className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors'
          >
            Add Exclusion
          </button>
        </div>

        {/* Other Details Section */}
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Other Details</h2>
          </div>

          {otherDetails.map((detail, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={detail}
                onChange={(e) => handleOtherDetailChange(index, e.target.value)}
                className='flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Other detail'
                required
              />
              <button
                type="button"
                onClick={() => removeOtherDetail(index)}
                className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors'
                disabled={otherDetails.length <= 1} // Disable button when loading
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addOtherDetail}
            className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors'
          >
            Add Detail
          </button>
        </div>

        {/* Reviews Section */}
        <div className='w-full bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Reviews</h2>
          </div>

          {reviews.map((review, index) => (
            <div key={index} className='mb-6 p-4 border rounded-lg bg-gray-50'>
              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold'>Review {index + 1}</h3>
                <button
                  type="button"
                  onClick={() => removeReview(index)}
                  className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors'
                  disabled={reviews.length <= 1} // Disable button when loading
                >
                  Remove Review
                </button>
              </div>

              <div className='mb-3'>
                <label className='block mb-1 font-medium'>User Name</label>
                <input
                  type='text'
                  value={review.user}
                  onChange={(e) => handleReviewChange(index, 'user', e.target.value)}
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='User name'
                  required
                />
              </div>

              <div className='mb-3'>
                <label className='block mb-1 font-medium'>Rating (0-5)</label>
                <input
                  type='number'
                  min="0"
                  max="5"
                  step="0.1"
                  value={review.rate}
                  onChange={(e) => handleReviewChange(index, 'rate', e.target.value)}
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Rating'
                  required
                />
              </div>

              <div className='mb-3'>
                <label className='block mb-1 font-medium'>Comment</label>
                <textarea
                  value={review.comment}
                  onChange={(e) => handleReviewChange(index, 'comment', e.target.value)}
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]'
                  placeholder='Review comment'
                  required
                />
              </div>
            </div>
          ))}
          <button
              type="button"
              onClick={addReview}
              className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors'
            >
              Add Review
            </button>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full md:w-auto px-6 py-3 mt-4 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors'
        >
          {isLoading ? 'ADDING...' : 'ADD TRIP'}
        </button>
      </form>
    </div>
  );
};

export default Add;