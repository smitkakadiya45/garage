import React from "react";
import { Link } from "react-router-dom";

const Specialservicepro = (abc) => {
  return (
    <>
        <div className="img">
            <img src={abc.img} alt="img" />
        </div>
        <div id="t1" className="text">
            <Link >{abc.title}</Link>
            <p>
                We are the assistance that assessments <br />
                genuinely the issues with the vehicle.
            </p>
            <Link className="btn" to="/booking">book service</Link>
        </div>
    </>
  )
}


export default Specialservicepro;