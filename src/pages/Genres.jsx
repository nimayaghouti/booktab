/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, json, Link } from 'react-router-dom';

const Categories = () => {
  const data = useLoaderData();
  return (
    <div className="container py-5">
      <div className="row overflow-hidden">
        {data.genres.map(genre => (
          <div
            key={genre.id}
            className="col-xl-2 col-lg-3 col-md-3 col-sm-4 py-3 d-flex justify-content-center"
          >
            <div className="blob">
              <Link to={`/genres/${genre.name}`}>
                <h4>{genre.name}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

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
