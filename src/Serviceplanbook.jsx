import { useRef, useState } from "react";
import { plan } from "./Redux";
import { useDispatch } from "react-redux";

const Serviceplanbook = () => {

    var a = useRef();
    var b = useRef();
    var c = useRef();
    var d = useRef();
    var e = useRef();
    // var f = useRef();
    var g = useRef();
    var h = useRef();
    const [data, setdata] = useState();
    const dis = useDispatch();
    // const nav = useNavigate();

    const demo = (e) => {

        if (e.target.value === "standard") {
            setdata("$59")
        }
        else if (e.target.value === "premium") {
            setdata("$79")
        }
        else if (e.target.value === "extended") {
            setdata("$99")
        }
        else if (e.target.value === "ultimate") {
            setdata("$129")
        }
        else (
            setdata(" ")
        )

    }

    const handleSubmit = (j) => {

        j.preventDefault();


        var name = a.current.value;
        var email = b.current.value;
        var serviceplan = c.current.value;
        var date = d.current.value;
        var time = e.current.value;
        var number = g.current.value;
        var price = h.current.value;



        // axios.post("https://g-b9eg.onrender.com/serviceplan", { name, email, serviceplan, date, time, number, price }).then(function (response) {
        //     if (response.data.status === "seccess") {
        //         alert("we are contact you soon as possible")
        //         nav("/")
        //     }
        // })

         dis(plan(name, email, serviceplan, date, time, number , price))

    };

    return (
        <>
            <div className="booking-container">
                <h2>Book your Service</h2>
                <form onSubmit={handleSubmit} className="booking-form">
                    <input type="text" required name="name" placeholder="Your Name" ref={a} />
                    <input type="email" required name="email" placeholder="Your Email" ref={b} />
                    <input type="text" required name="number" placeholder="Your number" ref={g} />
                    <select name="service" onChange={demo} required ref={c}>
                        <option value="">Select a Service pack</option>
                        <option value="standard">standard</option>
                        <option value="premium">premium</option>
                        <option value="extended">extended</option>
                        <option value="ultimate">ultimate </option>
                    </select>
                    <input type="date" name="date" required ref={d} />
                    <input type="time" name="time" required ref={e} />
                    <input type="text" name="price" disabled value={data} ref={h} />
                    <button type="submit">Submit Booking</button>
                </form>
            </div>
        </>
    )
}


export default Serviceplanbook;