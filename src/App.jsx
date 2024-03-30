import './App.css';
import { Routes, Route } from "react-router-dom"
import UserOutlet from './Componets/User/UserOutlet';
import HomePage from './Componets/User/Pages/HomePage';
import Loginpage from './Componets/User/Pages/Loginpage';
import Signuppage from './Componets/User/Pages/Signuppage';
import Uprofilepage from './Componets/User/Pages/Uprofilepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<UserOutlet/>} >
        <Route index element={<HomePage/>} />
        <Route path='/Signup' element={<Signuppage/>} />
        <Route path='/Login' element={<Loginpage/>} />
        <Route path='/Userprofile' element={<Uprofilepage/>} />
        {/* <Route path='/Mode' element={<Mode/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
