import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import SearchResultList from '../pages/SearchResultList';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ThankYou from '../pages/ThankYou';

// routes
const Router = () => {
  return (
   <Routes basename="/home">
    <Route path='/' element={<Navigate to='/home' /> } />
    <Route path='/home' element={<Home/>} />
    <Route path='/tours' element={<Tour/>} />
    <Route path='/tours/:id' element={<TourDetails/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/thank-you' element={<ThankYou/>} />
    <Route path='/tours/search' element={<SearchResultList/>} />
   </Routes>
  )
}

export default Router;
