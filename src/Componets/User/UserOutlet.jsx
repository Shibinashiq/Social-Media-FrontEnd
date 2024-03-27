import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Navbar/Nav';
// import { Footer } from './Footer/Footer';

function UserOutlet() {
  const location = useLocation();

  // Check if the current path is '/auth'
  const shouldRenderNav = location.pathname === '/auth';

  return (
    <div className=''>
      {shouldRenderNav && <Nav />}
      <Outlet />
      {/* Always render the Footer component */}
      {/* <Footer /> */}
    </div>
  );
}

export default UserOutlet;
