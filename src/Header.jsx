import React from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";



const Header = () => {

  var a = 1;
  
  const demo = () => {
      if(a === 1){
        document.getElementById("header").style.display = "block";
        a = 0;
      }
      else{
        document.getElementById("header").style.display = "none";
        a = 1;
      }
  }
  
  return (
    <>
      <div className="header-outer">
        <div className="header-inner">
          <div className="header-inner-child">
            <div className="img">
              <img src="assets/image/h.jpg" alt="img" />
            </div>
          </div>
          <div className="header-inner-child">
            <ul className="main" id="header">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a href="#">pages</a>
                <i className="fa-solid fa-angle-down"></i>
                <ul>
                  {/* <li>
                    <Link className="p" to={"/About"}>about us</Link>
                  </li> */}
                  {/* <li>
                    <Link className="p" to={"/service"}>Our services</Link>
                  </li> */}
                  <li>
                    <Link className="p" to={"/history"}>our history</Link>
                  </li>
                  <li>
                    <Link className="p" to={"/ourteam"}>our team</Link>
                  </li>
                  {/* <li>
                    <a className="p" href="#">
                      FAQ
                    </a>
                  </li> */}
                  <li>
                    <Link className="p" to="/pricing">pricing</Link>
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
                <a href="/service">our service</a>
              </li>
              <li>
                {/* <a href="#">blog detail</a> */}
                <a href="/about">about us</a>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <div className="header-icon" style={{color:"white"}} onClick={demo}>
              <IoMenuSharp />
            </div>
          </div>
          <div className="header-inner-child">
            <Link to="/contact">
              free quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
