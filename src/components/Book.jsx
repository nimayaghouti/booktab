/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import CartContext from '../store/cart/cart-context';

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

  const clearCartHandler = () => {
    cartCtx.deleteItem();
  };

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
        <button
          className="btn btn-outline-primary rounded-circle"
          onClick={addToCartHandler}
        >
          +
        </button>

        <button
          className="btn btn-outline-danger rounded-1"
          onClick={clearCartHandler}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Book;
