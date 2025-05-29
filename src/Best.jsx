import React from "react";
import Bestpro from "./Bestpro";
import Aos from "aos";

const Best = () => {

  Aos.init();
  return (
    <>
      <div className="best-outer">
        <div className="container">
          <div>
            <div className="best-title">
              <p>why we are best</p>
              <div className="b-u-l"></div>
              <div className="b-t">
                Our car rental services, in the travel industry and business
                industry,
                <br />
                stand apart for their quality and great taste
              </div>
            </div>
          </div>
          <div className="best-inner">
            <div className="best-inner-child">
              <Bestpro title="expert machanic" img="assets/image/be1.jpg" />
            </div>
            <div className="best-inner-child">
              <Bestpro title="engine upgrades" img="assets/image/be2.jpg" />
            </div>
            <div className="best-inner-child">
              <Bestpro title="Quick service" img="assets/image/be3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
