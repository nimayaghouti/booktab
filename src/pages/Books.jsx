import { useContext } from 'react';
import Book from '../components/Book';
import BookPlaceholder from '../components/BookPlaceholder';
import useBookData from '../hooks/useBookData';
import CartContext from '../store/CartContext';

const Books = () => {
  const { books, error, loading } = useBookData();
  const cartCtx = useContext(CartContext);

  if (loading) {
    return (
      <div className="container pt-4">
        <div className="row justify-content-center">
          {Array.from(Array(8), (e, i) => {
            return (
              <div
                key={i}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 py-3 justify-content-center"
              >
                <BookPlaceholder />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="alert alert-danger" role="alert">
            Error: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-4">
      <button
        onClick={() => cartCtx.clearCart()}
        className="btn btn-outline-danger"
      >
        پاک کردن سبد
      </button>
      <div className="row">
        {books.map(book => (
          <div
            key={book.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 py-3 justify-content-center"
          >
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
