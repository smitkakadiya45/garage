import React from "react";
import { Link } from "react-router-dom";

const Footermiddle = () => {
    return(
        <>
          <div className="footer-middle-outer">
        <div className="container">
            <div className="footer-middle-inner">
                <div className="footer-middle-child">
                    <div className="img">
                        <img src="assets/image/fm.jpg" alt="img" />
                    </div>
                    <p>
                        Motores gives you all elements which <br />
                        are necessary for your design goals.
                    </p>
                    <Link className="div1">
                        <i className="fa fa-home pe-3 text-white"></i>
                        174 Guild Street, Town MT.
                    </Link>
                    <Link className="div2">
                        <i className="fa fa-phone pe-3 text-white"></i>
                        (+44) 123 456 7892
                    </Link>
                    <Link className="div3">
                        <i className="fa fa-envelope pe-3 text-white"></i>
                        example@yourmail.com
                    </Link>
                    <Link className="f" to="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                        facebook
                    </Link>
                </div>
                <div className="footer-middle-child">
                    <div className="middle-title">
                        working hours
                        <div className="ul-mt"></div>
                    </div>
                    <div className="first">
                        <i className="fa-regular fa-clock"></i>
                        <p>monday - friday</p>
                        <span>8:00 am - 5:00 pm</span>
                    </div>
                    <div className="first">
                        <i className="fa-regular fa-clock"></i>
                        <p>saturday</p>
                        <span>9:00 am - 4:00 pm</span>
                    </div>
                    <div className="first second">
                        <i className="fa-regular fa-clock"></i>
                        <p>sunday</p>
                        <span>closed</span>
                    </div>
                    <Link className="f f2" to="https://x.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                        twitter
                    </Link>
                </div>
                <div className="footer-middle-child">
                    <div className="middle-title">
                        services
                        <div className="ul-mt"></div>
                    </div>
                    <Link >
                        <i className="fa-solid fa-angle-right"></i>
                        engine diagnostics
                    </Link>
                    <Link>
                        <i className="fa-solid fa-angle-right"></i>
                        oil & filters
                    </Link>
                    <Link>
                        <i className="fa-solid fa-angle-right"></i>
                        brake repair
                    </Link>
                    <Link>
                        <i className="fa-solid fa-angle-right"></i>
                        wheel alignment
                    </Link>
                    <Link className="f f3" to="https://www.youtube.com/" target="_blank">
                        <i className="fab fa-youtube"></i>
                        youtube
                    </Link>
                </div>
                <div className="footer-middle-child">
                    <div className="middle-title">
                        our news letter
                        <div className="ul-mt"></div>
                    </div>
                    <p>You can get latest update from Subscribing to our News Letter</p>
                    <div className="input">
                        <input type="text" placeholder="subscribe with us" />
                        <button type="button">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <Link className="f f4" to="https://in.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                        linkedin
                    </Link>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}


export default Footermiddle;