/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import CartContext from '../store/CartContext';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publication_year: 1960,
      genre: ['Fiction', 'Classic'],
      description:
        'A classic novel depicting racial injustice in the American South.',
      cover_image: 'https://fakeimg.pl/667x1000/cc6600',
    });
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className="card shadow"
      style={{ maxWidth: '21rem', margin: '0 auto' }}
    >
      <img
        src={book['cover_image']}
        className={`card-img-top img-fluid my-bg ${
          !imageLoaded && 'placeholder col-12'
        }`}
        alt="..."
        style={{ height: '15rem', objectFit: 'contain' }}
        onLoad={handleImageLoaded}
      />
      <div className="card-body">
        <h4 className="card-title">
          {book.title.length > 17
            ? book.title.substring(0, 17) + '...'
            : book.title}
        </h4>
        <h5 className="card-text">{book.author}</h5>
        <p className="card-text">{book.price.toLocaleString('fa-IR')} تومان</p>
        {/* <p className="card-text">{book.genre.join(' - ')}</p> */}
        <div className="d-flex justify-content-between">
          <Link to={book.id} className="btn btn-primary text-white">
            مشاهده
          </Link>
          <button
            className="btn btn-outline-primary align-self-end"
            onClick={addToCartHandler}
          >
            افزودن <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
