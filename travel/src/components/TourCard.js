
import React from 'react';

const TourCard = ({ tour, onDelete }) => {
  return (
    <div className="card" style={{ width: '19rem', margin: '1rem' }}>
      <img src={tour.image} className="card-img-top" alt={tour.title} />
      <div className="card-body">
        <h5 className="card-title">{tour.title}</h5>
        <p className="card-text">{tour.description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(tour.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TourCard;
