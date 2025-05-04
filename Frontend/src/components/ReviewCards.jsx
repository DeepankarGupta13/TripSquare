import React, { useState } from 'react';
import '../styles/ReviewCards.css';

const ReviewCards = () => {
  const [isReviewsExpanded, setIsReviewsExpanded] = useState(true);

  const toggleReviews = () => {
    setIsReviewsExpanded(!isReviewsExpanded);
  };

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 4,
      content: "Nicely managed and operated..Riha was one of the senior members of TripSquare operations team who was accompanying us on our trip. His attitude was very positive and friendly, while interacting with him we felt like we know him for years"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      content: "Excellent service! The trip was well-organized and the guides were knowledgeable."
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 4,
      content: "Had a wonderful experience. The accommodations were comfortable and the itinerary was perfect."
    },
    {
      id: 4,
      name: "Neha Gupta",
      rating: 3,
      content: "Good overall experience, but some activities felt rushed. The food options could be better."
    },
    {
      id: 5,
      name: "Sanjay Verma",
      rating: 5,
      content: "Absolutely fantastic! From start to finish, everything was perfect. Special thanks to our guide Riha for making this trip memorable. The attention to detail was impressive and we felt well taken care of throughout the journey."
    },
    {
      id: 6,
      name: "Ananya Singh",
      rating: 4,
      content: "Enjoyed the trip very much. The scenery was breathtaking and the activities were well-planned."
    },
    // Add more reviews as needed
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "star filled" : "star"}>
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-section">
      <div className='Title-Div'>
        <h1>Reviews</h1>
        <h2 className='Button-tripSquare' onClick={toggleReviews}>
          {!isReviewsExpanded ? 'Show' : 'Hide'}
        </h2>
      </div>
      <div className={`reviews-container ${!isReviewsExpanded ? 'collapsed' : ''}`}>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <h3 className="reviewer-name">{review.name}</h3>
                {renderStars(review.rating)}
              </div>
              <div className="divider">* * * *</div>
              <p className="review-content">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;