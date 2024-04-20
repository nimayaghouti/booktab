/* eslint-disable react/prop-types */
import { useState } from 'react';

const Book = ({ book }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className="card">
      <img
        src={book['cover_image']}
        className={`card-img-top img-fluid ${
          !imageLoaded && 'placeholder col-12'
        }`}
        alt="..."
        style={{ height: '15rem', objectFit: 'cover' }}
        onLoad={handleImageLoaded}
      />
      <div className="card-body">
        <h4 className="card-title">{book.title}</h4>
        <h5 className="card-text">{book.author}</h5>
        <p className="card-text">{book.genre.join(' - ')}</p>
        <a href="#" className="btn btn-primary">
          مشاهده
        </a>
      </div>
    </div>
  );
};

export default Book;
