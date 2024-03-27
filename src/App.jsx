import './App.css';
import Signup from './Componets/User/UserSignup/Signup';
import { Routes, Route } from "react-router-dom"
import UserOutlet from './Componets/User/UserOutlet';
import Home from './Componets/User/Story/Story';

function App() {
  return (
    <Routes>
      <Route path='/' element={<UserOutlet/>} >
        <Route index element={<Home/>} />
        <Route path='/auth' element={<Signup/>} />
        {/* <Route path='/Mode' element={<Mode/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
