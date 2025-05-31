import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react';
import './book.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const BookingForm = () => {


    var a = useRef();
    var b = useRef();
    var c = useRef();
    var d = useRef();
    var e = useRef();
    var f = useRef();
    var g = useRef();
    const nav = useNavigate();


    const handleSubmit = (j) => {

        j.preventDefault();


        var name = a.current.value;
        var email = b.current.value;
        var service = c.current.value;
        var date = d.current.value;
        var time = e.current.value;
        var notes = f.current.value;
        var number = f.current.value;



        axios.post("https://garage-p7qv.onrender.com/servicebook", { name, email, service, date, time, notes, number }).then(function (response) {
            if (response.data.status === "seccess") {
                alert("we are contact you soon as possible")
                nav("/")
            }
        })

    };

    return (
        <>
            <Header />
            <div className="booking-container">
                <h2>Book your Service</h2>
                <form onSubmit={handleSubmit} className="booking-form">
                    <input type="text" required name="name" placeholder="Your Name" ref={a} />
                    <input type="email" required name="email" placeholder="Your Email" ref={b} />
                    <input type="text" required name="number" placeholder="Your number" ref={g} />
                    <select name="service" required ref={c}>
                        <option value="">Select a Service</option>
                        <option value="engine diagnostics">engine diagnostics</option>
                        <option value="oil and filters">oil and filters</option>
                        <option value="brake repair">brake repair</option>
                        <option value="wheel alignment">wheel alignment</option>
                        <option value="general service">general service</option>
                        <option value="bettry checking">bettry checking</option>
                    </select>
                    <input type="date" name="date" required ref={d} />
                    <input type="time" name="time" required ref={e} />
                    <textarea name="message" placeholder="Additional Notes" ref={f}></textarea>
                    <button type="submit">Submit Booking</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default BookingForm;
