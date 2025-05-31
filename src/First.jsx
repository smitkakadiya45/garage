import React from "react";
import { Link } from "react-router-dom";

const First = (abc) => {
  return (
    <>
     <div className="service-first-outer">
        <div className="service-first-inner">
          <div className="service-first-inner-child">
            <div className="text">
              <p>
                <strong>{abc.title}</strong>
                <span>
                  <Link to="/">Home</Link>
                  <Link>{abc.title}</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;   