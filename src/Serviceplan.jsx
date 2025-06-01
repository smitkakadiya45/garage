// import react from 'react';
// import { useRef, useState } from 'react';
import './book.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { st } from './Redux';
import Serviceplanbook from './Serviceplanbook';

const Serviceplan = () => {

    return (
        <>
            <Header />
            <Provider store={st}>
                <Serviceplanbook />
            </Provider>
            <Footer />
        </>
    );
};

export default Serviceplan;
