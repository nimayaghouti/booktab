/* eslint-disable no-unused-vars */
import { useLoaderData, json, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BookDetail = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div
          className="w-100 my-2 d-flex justify-content-end"
          style={{ maxWidth: '992px' }}
        >
          <Link to="/books" className="btn btn-outline-primary">
            بازگشت <FaArrowLeft className="arrow" />
          </Link>
        </div>
        <div className="card shadow-sm w-100" style={{ maxWidth: '992px' }}>
          <div className="row p-2">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={data.cover_image}
                alt={data.title}
                className="rounded-3"
                style={{ width: '14rem' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-primary">{data.title}</h5>
                <div className="card-text mt-4">
                  <p className="text-primary">
                    <span className="text-muted">نویسنده:</span> {data.author}
                  </p>
                  <p className="text-primary">
                    <span className="text-muted">ژانر:</span>{' '}
                    {data.genre.join(' - ')}
                  </p>
                  <p className="text-primary">
                    <span className="text-muted">سال انتشار:</span>{' '}
                    {data.publication_year}
                  </p>
                  <p className="text-primary">
                    <span className="text-muted">توضیحات:</span>{' '}
                    {data.description}
                  </p>
                  <p className="text-primary">
                    <span className="text-muted">قیمت:</span>{' '}
                    {data.price.toLocaleString('fa-IR')} تومان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;

export async function loader({ request, params }) {
  const id = params.bookId;

  const response = await fetch('http://localhost:8001/books/' + id);

  if (!response.ok) {
    throw json({ message: 'صفحه مورد نظر یافت نشد' }, { status: 500 });
  } else {
    return response;
  }
}
