import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Forgotpsw from './ForgotPassword';
const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<Forgotpsw/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers