import { useTheme } from '../store/theme-context';

import classes from './MainNavigation.module.scss';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';

function MainNavigation() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className={`btn ${
          isDarkTheme ? 'btn-secondary' : 'btn-light'
        } rounded-circle`}
      >
        {isDarkTheme ? <IoMdSunny size={15} /> : <BsMoonStarsFill size={15} />}
      </button>
    </header>
  );
}

export default MainNavigation;
