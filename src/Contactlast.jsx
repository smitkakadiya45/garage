import React, { useRef } from "react";
import axios from 'axios';


const Contactlast = () => {



    var a = useRef();
    var b = useRef();
    var c = useRef();
    var d = useRef();
    var e = useRef();



    const demo = (g) => {


        g.preventDefault();

        var name = a.current.value;
        var email = b.current.value;
        var subject = c.current.value;
        var number = d.current.value;
        var massage = e.current.value;


        axios.post("http://localhost:1000/inquiry",{name,email,subject,number,massage}).then(function(response){
          if(response.data.status === "seccess"){
            alert("massage was sent")
          }
        })


    }

    return(
        <>
           <form method="post" onSubmit={demo}>
             <div className="touch-outer">
                <div className="touch-inner">
                    <div className="touch-inner-child touch-child1">
                        <div className="title">
                            <strong>get in touch</strong>
                            <p>If you're searching out advice, please fill out this form. We will discover you and get in touch.</p>
                        </div>
                        <div className="form">
                            <div className="div1">
                                <label for="name">your Name.
                                    <span className="dot">*</span>
                                </label>
                                <input type="text" name="name" required placeholder="your name here" ref={a}/>
                            </div>
                            <div className="div1">
                                <label for="email">your Email
                                    <span className="dot">*</span>
                                </label>
                                <input type="email" name="email" required placeholder="your email here" ref={b}/>
                            </div>
                        </div>
                        <div className="form">
                            <div className="div1">
                                <label for="subject">your subject
                                    <span className="dot">*</span>
                                </label>
                                <input type="text" name="subject" required placeholder="your subject here" ref={c}/>
                            </div>
                            <div className="div1">
                                <label for="number">contact number
                                    <span className="dot">*</span>
                                </label>
                                <input type="text" name="number" required placeholder="yout phone here" ref={d}/>
                            </div>
                        </div>
                        <div className="form1">
                            <label for="message">message
                                <span className="dot">*</span>
                            </label>
                            <textarea name="message" cols="30" rows="10" required placeholder="Tell us few words" ref={e}></textarea>
                        </div>
                        <button type="submit">send massage</button>
                    </div>
                    <div className="touch-inner-child">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851966824!2d-0.2664051595240117!3d51.52852620095036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1736431992406!5m2!1sen!2sin" width="600" height="860"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
           </form>
         </>
    )
}


export default Contactlast;