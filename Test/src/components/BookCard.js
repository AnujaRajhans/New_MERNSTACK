import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/img.jpg";
const BookCard = ({ book }) => {
  return (
    <div className="container mt-4 ml-5 col-md-8">
      <div className="card">
        <div className="card-body">
          <img src={image} className="card-img-top" alt={book.title} />
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">Author: {book.author}</p>
          <Link to={`/book/${book.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
