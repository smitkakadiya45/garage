import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error-outer">
        <div className="img">
          <img src="assets/image/404.jpg" alt="img" />
          <div className="blac"></div>
        </div>
        <div className="container">
        <div className="error-inner">
          <div className="error-inner-child">
            <img src="assets/image/error.png" alt="img" />
            {/* <div className="logo"> */}
              <h2>
                404
                <span>error</span>
              </h2>
            {/* </div> */}
                <div className="text">
                  <h3>
                    Opps page not found
                  </h3>
                  <p>
                  Sorry, but the page you are looking for does not exist or has been removed.
                  </p>
                <Link to="/">return home</Link>
                </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Error;
