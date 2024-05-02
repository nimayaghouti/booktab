// import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import CategoriesPage from './pages/Categories';
import BooksPage from './pages/Books';
import BookDetailPage, { loader as BookDetailLoader } from './pages/BookDetail';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'categories', element: <CategoriesPage /> },
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
