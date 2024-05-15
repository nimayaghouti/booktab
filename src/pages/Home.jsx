import { Link } from 'react-router-dom';
import WaveSVG from '../components/UI/WaveSVG';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import useBookData from '../hooks/useBookData';

const Home = () => {
  const { books } = useBookData();

  const sliderBooks = books.slice(0, 4);
  return (
    <>
      <header className="header pb-8 mb-5">
        <div className="hero text-light pt-7">
          <div className="container-xl">
            <div className="row justify-content-center align-items-center flex-wrap-reverse">
              <div className="col-md-6">
                <div className="text-container p-4 d-flex flex-column justify-content-center text-center text-md-end h-100 mb-5">
                  <h1 className="display-4">به بوکتاب خوش آمدید</h1>
                  <p className="lead mt-2">فروشگاه اینترنتی کتاب دیجیتال</p>
                  <p className="h4 mt-2 lh-base">
                    با ما تجربه ای متفاوت در سفر به دنیای شگفت انگیز کتاب‌ها
                    داشته باشید.
                  </p>
                  <Link to="/genres" className="my-3">
                    <button className="btn btn-light py-2 px-4 rounded-5">
                      مشاهده ژانرها
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-container mb-5 px-4 d-flex justify-content-center">
                  <img
                    src="/logo.png"
                    alt=""
                    className="img-fluid bg-white bg-opacity-50 rounded-5"
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveSVG />
      </header>
      <section className="book-slider mb-6">
        <h2 className="text-center mb-6 display-6">کتاب‌ها</h2>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {sliderBooks.map((book, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                style={{ height: '29rem' }}
              >
                <img
                  src={book['cover_image']}
                  className="d-block mx-auto rounded-2"
                  alt={book.title}
                  style={{ height: '20rem' }}
                />
                <div className=" text-center mt-3">
                  <p className="h2 fw-light">{book.title}</p>
                  <p className="h3 fw-light">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <IoIosArrowDropleft
              aria-hidden="true"
              size={60}
              className=" text-primary"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <IoIosArrowDropright
              aria-hidden="true"
              size={60}
              className=" text-primary"
            />
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel-indicators position-relative flex-row-reverse">
            {sliderBooks.map((book, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active bg-primary' : 'bg-primary'}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="container mt-5 w-100 d-flex justify-content-center">
          <Link to="/books" className="">
            <button className="btn btn-primary text-white py-2 px-4 rounded-5">
              مشاهده و خرید
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
