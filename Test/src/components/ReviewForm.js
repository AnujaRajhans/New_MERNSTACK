import React, { useState, useRef } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [rating, setRating] = useState(0); // State to keep track of the selected rating
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      title: titleRef.current.value,
      text: textRef.current.value,
      rating,
    };
    onAddReview(review);
    titleRef.current.value = '';
    textRef.current.value = '';
    setRating(0); // Reset rating after submission
  };

  return (
    <div className='container p-4 border border-1 border-success col-md-9'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Review Title</label>
          <input type="text" className="form-control" id="title" ref={titleRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="text">Review Text</label>
          <textarea className="form-control" id="text" ref={textRef} required></textarea>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'filled' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit Review</button>
      </form>

      <style jsx>{`
        .stars {
          display: flex;
          cursor: pointer;
          font-size: 1.5rem;
          align-items: center;
          justify-content: center;
        }
        .star {
          color: #ccc;
          transition: color 0.2s;
        }
        .star.filled {
          color: #f39c12; /* Gold color for filled stars */
        }
        .star:hover {
          color: #f39c12; /* Gold color on hover */
        }
      `}</style>
    </div>
  );
};

export default ReviewForm;
