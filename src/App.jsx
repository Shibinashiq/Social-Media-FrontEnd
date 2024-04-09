import './App.css';
import { Routes, Route , Navigate } from "react-router-dom"
import UserOutlet from './Componets/User/UserOutlet';
import HomePage from './Componets/User/Pages/HomePage';
import Loginpage from './Componets/User/Pages/Loginpage';
import Signuppage from './Componets/User/Pages/Signuppage';
import Uprofilepage from './Componets/User/Pages/Uprofilepage';
import Dashboard from './Componets/Admin/Dashboard/Dashboard';
import AdminOutlet from './Componets/Admin/AdminOutlet';
import UserListing from './Componets/Admin/Userlisting.jsx/Userlisting'; 
import AdminLogin from './Componets/Admin/AdminLogin/AdminLogin'
import NotFound from './Componets/ErrorPage/NotFound';
function App() {


  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  return (
    <Routes>
      {/* User Routes */}
      <Route path='/' element={<UserOutlet/>}>
        <Route index element={<HomePage/>} />
        <Route path='/Signup' element={<Signuppage/>} />
        <Route path='/Login' element={<Loginpage/>} />
        <Route path='/Userprofile' element={isAuthenticated ? <Uprofilepage/> : <Navigate to="/Login" />} />
      </Route>

      {/* Admin Routes */}
      <Route path='/' element={<AdminOutlet/>}>
        <Route path='/Admindashboard' element={<Dashboard/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>} />
        <Route path="/userlisting" element={<UserListing/>} />
      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
