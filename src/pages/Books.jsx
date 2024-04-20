import Book from '../components/Book';
import BookPlaceholder from '../components/BookPlaceholder';
import useBookData from '../hooks/useBookData';

const Books = () => {
  const { books, error, loading } = useBookData();

  if (loading) {
    return (
      <div className="container pt-4">
        <div className="row">
          {Array.from(Array(8), (e, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 py-1">
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
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-lg-3 col-md-4 col-sm-6 py-1">
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
