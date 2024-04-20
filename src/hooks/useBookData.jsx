import { useState, useEffect } from 'react';

const useBookData = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8001/books');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Clean up function (optional)
    return () => {
      // You can perform cleanup tasks here if necessary
    };
  }, []); // Empty dependency array means this effect runs only once on component mount

  return { books, error, loading };
};

export default useBookData;
