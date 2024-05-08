// import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import GenresPage, { loader as GenresLoader } from './pages/Genres';
import BooksPage from './pages/Books';
import BookDetailPage, { loader as BookDetailLoader } from './pages/BookDetail';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'genres', element: <GenresPage />, loader: GenresLoader },
      { path: 'books', element: <BooksPage /> },
      {
        path: 'books/:bookId',
        element: <BookDetailPage />,
        loader: BookDetailLoader,
      },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
