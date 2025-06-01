import React, { useRef } from "react";
import './book.css';
import { useDispatch, useSelector } from "react-redux";
import { ser } from "./Redux";
import Loader from "./Loader";

const Bookingform = () => {

    var a = useRef();
    var b = useRef();
    var c = useRef();
    var d = useRef();
    var e = useRef();
    var f = useRef();
    var g = useRef();

    var { loading, error } = useSelector((state) => state);
    var dis = useDispatch();

    const handleSubmit = (j) => {

        j.preventDefault();


        var name = a.current.value;
        var email = b.current.value;
        var service = c.current.value;
        var date = d.current.value;
        var time = e.current.value;
        var notes = f.current.value;
        var number = g.current.value;



        // axios.post("https://g-b9eg.onrender.com/servicebook", { name, email, service, date, time, notes, number }).then(function (response) {
        //     if (response.data.status === "seccess") {
        //         alert("we are contact you soon as possible")
        //         nav("/")
        //     }
        // })

        dis(ser(name, email, service, date, time, notes, number))

    };


    if (loading) {
        return (
            <>
                <h1>
                    <Loader  />
                </h1>
            </>
        )
    }
    if (error != null) {
        return (
            <>
                <h1>
                    {error}
                </h1>
            </>
        )
    }
    return (
        <>
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
        </>
    )
}


export default Bookingform;