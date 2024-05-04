/* eslint-disable no-unused-vars */
import { Outlet, ScrollRestoration } from 'react-router-dom';
import CartModal from '../components/CartModal';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <CartModal />
      <main style={{ minHeight: '70vh', marginTop: '4.25rem' }}>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
