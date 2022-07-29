import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from '../components/Login';







const AppRoutes = () => {
    return (
      <BrowserRouter>
     
   

        <Routes>
            <Route path="/Login" element={<Login/>}/> 
           
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;