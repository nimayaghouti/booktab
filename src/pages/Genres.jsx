/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useLoaderData, json, Link } from 'react-router-dom';

const Categories = () => {
  const data = useLoaderData();
  return (
    <div className="container py-5">
      <div className="row overflow-hidden">
        {data.map(genre => (
          <div
            key={genre.id}
            className="col-xl-2 col-lg-3 col-md-3 col-sm-4 py-3 d-flex justify-content-center"
          >
            <div className="blob">
              <h4>{genre.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

export async function loader({ request, params }) {
  const response = await fetch('http://localhost:8001/genres');

  if (!response.ok) {
    throw json({ message: 'صفحه مورد نظر یافت نشد' }, { status: 500 });
  } else {
    return response;
  }
}
