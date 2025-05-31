import React from "react";
import { Link } from "react-router-dom";

const Excellentpro = (change) => {
  return (
    <>
      <div className="excellent-inner-child">
        <div className="img">
          <img src={change.img} alt="img" />
          <div className="ho">
            <ul>
              <li>
                <Link to="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="https://x.com/" target="_blank">
                  <i className="fab fa-twitter" target="_blank"></i>
                </Link>
              </li>
              <li>
                <Link to="https://in.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text">
          <strong>{change.name}</strong>
          <span>{change.title}</span>
        </div>
      </div>
    </>
  );
};

export default Excellentpro;
