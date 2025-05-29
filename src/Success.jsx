import Aos from "aos";
import React from "react";
import { Link } from "react-router-dom";


const Success = () => {
    
    Aos.init();

    return (
        <>
            <div className="success-outer">
                <div className="container">
                    <div className="success-inner">
                        <div className="success-inner-child">
                            <div className="imgs1">
                                <img src="assets/image/s1.jpg" alt="img" />
                            </div>
                            <div className="imgs2">
                                <img src="assets/image/s2.jpg" alt="img" />
                            </div>
                            <div className="square-succ"></div>
                        </div>
                        <div className="success-inner-child">
                            <strong> success experiences </strong>
                            <div className="success-year">
                                <span>1998</span>
                                <div className="success-text">
                                    20+ Years of experience
                                    <br />in auto services.
                                </div>
                            </div>
                            <div className="text">
                                <div className="text-suc">
                                    We are a group of expert and gifted specialists in every
                                    homegrown circle. We <br />
                                    offer a wide scope of administrations and simultaneously.
                                </div>
                                <ul className="suc-ul">
                                    <li>Competitive price</li>
                                    <li>Full safety analysis</li>
                                    <li>we are qualified team</li>
                                </ul>
                            </div>
                            <Link to={"/about"}>read more</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Success;