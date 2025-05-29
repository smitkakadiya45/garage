import React from "react";
import { Link } from "react-router-dom";

const Adminheader = () => {
    return (
        <>
            <div className="header-outer">
                <div className="header-inner" style={{justifyContent:"left",paddingLeft:"60px"}}>
                    <div className="header-inner-child">
                        <div className="img">
                            <img src="assets/image/h.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="header-inner-child">
                        <ul className="main">
                            <li>
                                <Link to={"/adminpanel"}>Home</Link>
                            </li>
                            <li>
                                {/* <a href="#">pages</a>
                <i className="fa-solid fa-angle-down"></i> */}
                                <ul>
                                    <li>
                                        {/* <Link className="p" to={"/About"}>about us</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link className="p" to={"/service"}>Our services</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link className="p" to={"/history"}>our history</Link>n */}
                                    </li>
                                    <li>
                                        {/* <Link className="p" to={"/ourteam"}>our team</Link> */}
                                    </li>
                                    <li>
                                        {/* <a className="p" href="#">
                      FAQ
                    </a> */}
                                    </li>
                                    <li>
                                        {/* <Link className="p" to = "pricing">pricing</Link> */}
                                    </li>
                                </ul>
                            </li>
                            {/* <li>
                <a href="#">services</a>
                <i className="fa-solid fa-angle-down"></i>
                <ul className="ff">
                  <li>
                    <a className="p" href="#">
                      engine diagnosicts
                    </a>
                  </li>
                  <li>
                    <a className="p" href="#">
                      oil and filters
                    </a>
                  </li>
                  <li>
                    <a className="p" href="#">
                      brake repair
                    </a>
                  </li>
                  <li>
                    <a className="p" href="#">
                      wheel alignment
                    </a>
                  </li>
                  <li>
                    <a className="p" href="#">
                      general service
                    </a>
                  </li>
                  <li>
                    <a className="p" href="#">
                      bettry checking
                    </a>
                  </li>
                </ul>
              </li> */}
                            <li>
                                {/* <a href="#">our details</a> */}
                                {/* <a href="/service">our service</a> */}
                            </li>
                            <li>
                                {/* <a href="#">blog detail</a> */}
                                {/* <a href="/about">about us</a> */}
                            </li>
                            <li>
                                {/* <Link to="/contact">contact</Link> */}
                            </li>
                        </ul>
                    </div>
                    {/* <div className="header-inner-child">
            <Link to="/contact">
            free quote
            </Link>
          </div> */}
                </div>
            </div>
        </>
    );
};

export default Adminheader;
