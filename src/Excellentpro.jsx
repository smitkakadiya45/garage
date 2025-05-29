import React from "react";

const Excellentpro = (change) => {
  return (
    <>
      <div className="excellent-inner-child">
        <div className="img">
          <img src={change.img} alt="img" />
          <div className="ho">
            <ul>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank">
                  <i className="fab fa-twitter" target="_blank"></i>
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
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
