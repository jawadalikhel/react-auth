import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
};
