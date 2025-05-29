import React from "react";
import Contactsecpro from "./Contactsecpro";

const Contactsecond = () => {
  return (
    <>
      <div className="contact-outer">
        <div className="container">
          <div className="contact-title">
            <p>Need Any Services For Cars?</p>
            <div className="c-t-t"></div>
            <div className="c-t">
              Our car rental services, in the travel industry and business
              industry,
              <br />
              stand apart for their quality and great taste
            </div>
          </div>
          <div className="contact-inner">
            <Contactsecpro img="assets/image/con1.jpg" name="174 Guild Street, Town MT." add="London, UK"/>
            <Contactsecpro img="assets/image/con2.jpg" name="(+44) 123 456 789" add="Mon-Sat 9:00am - 5:00pm"/>
            <Contactsecpro img="assets/image/con3.jpg" name="example@youremail.com" add="24 X 7 online support"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactsecond;
