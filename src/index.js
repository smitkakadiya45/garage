import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Body';
// import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Ourservice from './Ourservice';
import Aboutus from './Aboutus';
import Ourhistory from './Ourhistory';
import Error from './Error';
import Ourteam from './Ourteam';
import Price from './Price';
import Serviceplan from './Serviceplan';
import Admin from './admin/Admin';
import Booking from './Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Service" element={<Ourservice/>} />
      <Route path="/About" element={<Aboutus/>} />
      <Route path="/history" element={<Ourhistory/>} />
      <Route path="/ourteam" element={<Ourteam/>} />
      <Route path="/pricing" element={<Price/>} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/serviceplan" element={<Serviceplan/>} />
      <Route path="/adminpanel" element={<Admin/>} />
      <Route path="/*" element={<Error/>} />
     </Routes>
     </BrowserRouter>
   </>
);