const BookPlaceholder = () => {
  return (
    <div
      className="card overflow-hidden"
      aria-hidden="true"
      style={{ maxWidth: '21rem', margin: '0 auto' }}
    >
      <div className="placeholder-glow">
        <div className="placeholder col-12" style={{ height: '15rem' }}></div>
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <a
          href="#"
          tabIndex="-1"
          className="btn btn-primary disabled placeholder col-6"
        ></a>
      </div>
    </div>
  );
};

export default BookPlaceholder;
