/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useParams, useLoaderData, json, Link } from 'react-router-dom';
import Book from '../components/Book';

import { FaArrowLeft } from 'react-icons/fa';

const Genre = () => {
  const { genre } = useParams();
  const data = useLoaderData();

  const genreBooks = data.books.filter(book => book.genre.includes(genre));

  return (
    <div className="container pt-4">
      <div className="w-100 my-2 d-flex justify-content-end">
        <Link to="/genres" className="btn btn-outline-primary">
          بازگشت <FaArrowLeft className="arrow" />
        </Link>
      </div>
      <div className="row">
        {genreBooks.map(book => (
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

export default Genre;

export async function loader() {
  const response = await fetch(
    'https://raw.githubusercontent.com/nimayaghouti/booktabdata/main/db.json'
  );

  if (!response.ok) {
    throw json({ message: 'صفحه مورد نظر یافت نشد' }, { status: 500 });
  } else {
    const data = await response.json(); // Parse the JSON response
    return data;
  }
}
