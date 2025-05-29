import React from "react";


const Footertop = () => {
    return (
        <>
            <div className="footer-top-outer">
                <div className="footer-top-inner">
                    <div className="footer-top-child">
                        <i className="fa-regular fa-envelope"></i>
                        <span className="s1">email:example@email.com</span>
                    </div>
                    <div className="footer-top-child">
                        <i className="fa-regular fa-user"></i>
                        <span>phone:[+44] 123 456 789</span>
                    </div>
                    <div className="footer-top-child">
                        <i className="fa-solid fa-headphones-simple"></i>
                        <span>24 hours costumer service</span>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Footertop;