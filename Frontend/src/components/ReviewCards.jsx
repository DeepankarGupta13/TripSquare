import React, { useEffect, useState } from 'react';
import '../styles/ReviewCards.css';

const ReviewCards = ({ reviews }) => {
  const [isReviewsExpanded, setIsReviewsExpanded] = useState(true);
  const [allReviews, setReviews] = useState([])

  const toggleReviews = () => {
    setIsReviewsExpanded(!isReviewsExpanded);
  };
  
  useEffect(() => {
    setReviews(reviews);
  }, [reviews])

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
          {allReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <h3 className="reviewer-name">{review.user}</h3>
                {renderStars(review.rate)}
              </div>
              <div className="divider">* * * *</div>
              <p className="review-content">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;