// StarRating.js
import React from 'react';
import '../App.css'; // Import the CSS file for styling

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  
  return (
    <div className="star-rating">
      {stars.map((filled, index) => (
        <span key={index} className={`star ${filled ? 'filled' : ''}`}>&#9733;</span>
      ))}
    </div>
  );
};

export default StarRating;
