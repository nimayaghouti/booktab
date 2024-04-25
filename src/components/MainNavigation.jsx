import { NavLink } from 'react-router-dom';
import { useTheme } from '../store/ThemeContext';

// import classes from './MainNavigation.module.scss';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';
import logo from '../assets/images/logo.png';

function MainNavigation() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow p-1"
      style={{ '--bs-bg-opacity': 0.9 }}
    >
      <div className="container flex-row-reverse">
        <div className="flex-grow-1 d-flex justify-content-between justify-content-lg-end align-items-center">
          <button
            className="navbar-toggler border-0 h-50 p-0 me-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to="/" className="navbar-brand">
            <span className="fs-6 text-primary">BOOKTAB</span>
            <img src={logo} alt="Booktab Logo" width={50} />
          </NavLink>
        </div>
        <div
          className="offcanvas offcanvas-end bg-dark"
          style={{ '--bs-bg-opacity': 0.9 }}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <button
            type="button"
            className="btn-close btn-close-white mt-4 ms-3 me-auto d-lg-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <ul className="offcanvas-body navbar-nav gap-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                end
              >
                بوکتاب
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                دسته‌بندی‌ها
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                کتاب‌ها
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                ارتباط با ما
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleTheme}
                className={`btn fs-6 py-2 ${
                  isDarkTheme ? 'btn-secondary' : 'btn-light'
                } rounded-circle`}
              >
                {isDarkTheme ? (
                  <IoMdSunny size={16} />
                ) : (
                  <BsMoonStarsFill size={16} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
