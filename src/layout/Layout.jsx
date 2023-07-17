import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
