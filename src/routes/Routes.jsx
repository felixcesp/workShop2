import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import First from '../components/First';
import Home from '../components/Home';
import Login from '../components/Login';

const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<First/>}/> 
            <Route path="/Login" element={<Login/>}/>  
            <Route path="/Home" element={<Home/>}/>     
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;