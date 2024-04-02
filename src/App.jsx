import { useState, useEffect } from 'react';
import './App.scss';
import { FaApple } from 'react-icons/fa';

function App() {
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [isDarkTheme, setIsDarkTheme] = useState(initialTheme === 'dark');

  // Update theme in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.body.setAttribute('data-bs-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme} className="btn btn-primary">
        Toggle Theme
      </button>
      <div className="h1 w-50 mx-auto my-6 text-center text-primary">
        hello world
      </div>
      <div className="h1 w-50 mx-auto my-6 text-center">سلام دنیا</div>
      <FaApple className="text-primary" size={70} />
    </div>
  );
}

export default App;
