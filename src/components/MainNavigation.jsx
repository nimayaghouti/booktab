import { NavLink } from 'react-router-dom';
import { useTheme } from '../store/theme-context';

import classes from './MainNavigation.module.scss';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';
import logo from '../assets/images/logo.png';

function MainNavigation() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container flex-row-reverse">
        <div className="flex-grow-1 d-flex justify-content-between justify-content-lg-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to="/" className="navbar-brand">
            <span className=" fs-5 text-primary">BOOKTAB</span>
            <img src={logo} alt="Booktab Logo" width={60} />
          </NavLink>
        </div>
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <ul className="offcanvas-body navbar-nav gap-4">
            <button
              type="button"
              className={`btn-close d-lg-none ${classes.setColor}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
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
                className={`btn fs-5 ${
                  isDarkTheme ? 'btn-secondary' : 'btn-light'
                } rounded-circle`}
              >
                {isDarkTheme ? (
                  <IoMdSunny size={18} />
                ) : (
                  <BsMoonStarsFill size={18} />
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
