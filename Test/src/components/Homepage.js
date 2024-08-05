import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import UseFetch from '../hook/UseFetch';


const HomePage = () => {
  const { data: books, loading, error } = UseFetch(`https://freetestapi.com/api/v1/books?limit=6`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books!</p>;

  return (
    <div className="row">
      {books.map(book => (
        <div className="col-md-4 mb-4" key={book.id}>
          <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
            <BookCard book={book} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

