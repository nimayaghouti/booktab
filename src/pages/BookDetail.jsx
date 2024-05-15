/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { useLoaderData, useNavigate, json, Link } from 'react-router-dom';
import CartContext from '../store/CartContext';

import { FaArrowLeft } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const BookDetail = () => {
  const data = useLoaderData();
  const cartCtx = useContext(CartContext);

  const navigate = useNavigate();

  // Handle the button click to go back
  const handleGoBack = () => {
    navigate(-1); // Navigate back one page in the history stack
  };

  const addToCartHandler = () => {
    cartCtx.addItem({
      ...data,
      quantity: 1,
    });
  };

  return (
    <>
      <div className="container mb-4 d-flex flex-column align-items-center">
        <div
          className="w-100 my-2 d-flex justify-content-end"
          style={{ maxWidth: '992px' }}
        >
          <Link onClick={handleGoBack} className="btn btn-outline-primary">
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
                <h4 className="card-title">{data.title}</h4>
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
                <button
                  className="btn btn-primary text-white"
                  onClick={addToCartHandler}
                >
                  افزودن به سبد خرید <FaShoppingCart />
                </button>
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
  const id = Number(params.bookId);

  const response = await fetch(
    'https://raw.githubusercontent.com/nimayaghouti/booktabdata/main/db.json'
  );

  if (!response.ok) {
    throw json({ message: 'صفحه مورد نظر یافت نشد' }, { status: 500 });
  } else {
    const data = await response.json();
    const book = data.books.find(book => book.id === id);
    if (!book) {
      throw json({ message: 'کتاب مورد نظر یافت نشد' }, { status: 404 });
    }

    return book;
  }
}
