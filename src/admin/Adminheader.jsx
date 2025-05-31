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
                                {/* <Link>pages</a>
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
                                        {/* <Link className="p">
                      FAQ
                    </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link className="p" to = "pricing">pricing</Link> */}
                                    </li>
                                </ul>
                            </li>
                            {/* <li>
                <Link >services</Link>
                <i className="fa-solid fa-angle-down"></i>
                <ul className="ff">
                  <li>
                    <Link className="p" >
                      engine diagnosicts
                    </Link>
                  </li>
                  <li>
                    <Link className="p" >
                      oil and filters
                    </Link>
                  </li>
                  <li>
                    <Link className="p">
                      brake repair
                    </Link>
                  </li>
                  <li>
                    <Link className="p">
                      wheel alignment
                    </Link>
                  </li>
                  <li>
                    <Link className="p">
                      general service
                    </Link>
                  </li>
                  <li>
                    <Link className="p">
                      bettry checking
                    </Link>
                  </li>
                </ul>
              </li> */}
                            <li>
                                {/* <Link >our details</Link> */}
                                {/* <Link to="/service">our service</Link> */}
                            </li>
                            <li>
                                {/* <Link>blog detail</a> */}
                                {/* <Link to="/about">about us</Link> */}
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
