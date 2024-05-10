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
import ProfileIcon from './Componets/User/Profile/ProfileIcon';
import { Footer } from './Componets/User/Footer/Footer';
import ChatFirst from './Componets/User/ChatArea/ChatFirst';
import ILchat from './Componets/User/ChatArea/Chat/ILchat';
import Like from './Componets/User/Postes/Like';
import Suggestions from "./Componets/User/Suggestion/Suggestions";
import SavedPage from './Componets/User/Pages/SavedPage';
import UsersProfile from './Componets/User/UsersProfile/UsersProfile';
import UsersPage from './Componets/User/Pages/UsersPage';
function App() {

  // const token = useSelector((state) => state.token || ""); 
  // console.log(token);
  // const token = localStorage.getItem('token');
  // const isAuthenticated = !!token;
  return (
    <Routes>
      {/* User Routes */}
      <Route path='/' element={<UserOutlet/>}>
        <Route index element={<HomePage/>} />
        <Route path='/Signup' element={<Signuppage/>} />
        <Route path='/Login' element={<Loginpage/>} />
        <Route path='/Userprofile' element={<Uprofilepage/>} />
        <Route path='/SavedPage' element={<SavedPage/>} />

  
        <Route path='/suggestions' element={<Suggestions/>} />

        <Route path='/ChatFirst' element={<ChatFirst/>} />
        <Route path='/individualchat' element={<ILchat/>} />
        <Route path='/UsersProfile/:id' element={<UsersPage/>} />


        {/* <Route path='/Userprofile' element={isAuthenticated ? <Uprofilepage/> : <Navigate to="/Login" />} /> */}
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
