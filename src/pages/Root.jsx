import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main style={{ minHeight: '70vh', marginTop: '4.25rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
