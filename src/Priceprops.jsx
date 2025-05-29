import React from "react";
import { Link } from "react-router-dom";

const Priceprops = (abc) => {
  return (
    <>
      <div className="price-inner-child">
        <div className="pc">
          <div className="price-child c1">
            <div className="text">
              <h2>{abc.title}</h2>
              <span>${abc.p}</span>
              <Link to="/serviceplan">choose</Link>
            </div>
          </div>
          <div className="price-child c2">
            <ul style={{ listStyleType: "none" }}>

              <li>
                <i className="fas fa-check-circle text-secondary me-3"></i>
                car wash & polishing</li>
              <li>
                <i className="fas fa-check-circle text-secondary me-3"></i>
                water wash & oil level</li>
              <li><i className={abc.logo1}></i>wheel & steering checkup</li>
              <li>
              <i className={abc.logo2}></i> brake adjustment</li>
              <li>
              <i className={abc.logo3}></i>cambelt replacement</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Priceprops;
