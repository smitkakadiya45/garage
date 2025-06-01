// import React from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
import './book.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { st } from './Redux';
import Bookingform from './Bookingform';

const Booking = () => {
    return (
        <>
            <Header />
            <Provider store={st}>
                <Bookingform />
            </Provider>
            <Footer />
        </>
    );
};

export default Booking;
