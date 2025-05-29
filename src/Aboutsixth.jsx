import React from "react";
import {Brandprops, Brandprops2 } from "./Brandprops";

const Aboutsixth = () => {
  return (
    <>
      <div className="brand-outer">
        <div className="container">
          <div className="brand-title">
            <p>our brands supports</p>
            <div className="b-t" />
            <div className="brand-t">
              Our car rental services, in the travel industry and business
              industry,
              <br />
              stand apart for their quality and great taste
            </div>
          </div>
          <div className="brand-inner">
            <div className="brand-child">
              <Brandprops img="assets/image/b1.png"/>
              <Brandprops img="assets/image/b2.png"/>
              <Brandprops img="assets/image/b3.png"/> 
              <Brandprops img="assets/image/b4.png"/>
            </div>
            <div className="brand-child">
              <Brandprops2 img="assets/image/b5.png"/>
              <Brandprops2 img="assets/image/b6.png"/>
              <Brandprops2 img="assets/image/b7.png"/> 
              <Brandprops2 img="assets/image/b8.png"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutsixth;
