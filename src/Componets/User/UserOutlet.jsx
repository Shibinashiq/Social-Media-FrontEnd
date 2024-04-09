import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Navbar/Nav';


function UserOutlet() {
  const location = useLocation();

 
  const shouldRenderNav = location.pathname === '/Signup';

  return (
    <div className=''>
      {shouldRenderNav && <Nav />}
      <Outlet />
      
    </div>
  );
}

export default UserOutlet;
