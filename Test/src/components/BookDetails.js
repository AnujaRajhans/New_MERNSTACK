import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewForm from './ReviewForm';
import StarRating from '../components/StartRating'; 
import img from '../assets/book.jpg';
function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://freetestapi.com/api/v1/books/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setBook(data);

        // Load reviews from local storage
        const savedReviews = JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];
        setReviews(savedReviews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddReview = (review) => {
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div className="row">
      {/* Book Details Card */}
      <Card className="mb-3 container col-md-4 mt-3">
        <Card.Body>
          <Card.Img variant="bottom" src={img} height={400} width={250} alt={book.title}/>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
          <Card.Text>
            <strong>Published Date:</strong> {book.publishedDate}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {book.description}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${book.price}
          </Card.Text>
        </Card.Body>
      </Card>

    
      <div className="reviews mb-4 col-md-6 container">
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          <Carousel>
            {reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <Card className="mx-4">
                  <Card.Body>
                    <Card.Title>{review.title}</Card.Title>
                    <Card.Text>{review.text}</Card.Text>
                    <Card.Text>
                      <strong>Rating:</strong> <StarRating rating={review.rating} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No reviews yet.</p>
        )}
        <br></br>
        <br></br>
        <h5>Review Form</h5>
            <ReviewForm onAddReview={handleAddReview} />
      </div>

      {/* Review Form */}
  
    </div>
  );
}

export default BookDetails;
