import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [btnShow,setBtnShow] = useState(false) 
  // export const UserContext = createContext()
  

  return (
    <>
      <Navbar  btnShow={btnShow}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login setBtnShow={setBtnShow}/>} />
        <Route path='/signup' element={<Signup setBtnShow={setBtnShow}/>} />
        <Route path='/logout' element={<Logout setBtnShow={setBtnShow}/>} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App