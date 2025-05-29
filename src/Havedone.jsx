import React from "react";
import { Havedonepro, Havedonepro2 } from "./Havedonepro";
import Aos from "aos";

const Havedone = () => {
  Aos.init();
  return (
    <>
      <div className="havedone-outer">
        <div className="container">
        <div>
          <div className="hvd-title">
            <p>what we have done</p>
            <div className="h-v-d"></div> 
            <div className="h-v">
              Our car rental services, in the travel industry and business
              industry,
              <br />
              stand apart for their quality and great taste
            </div>
          </div>
          </div>
          <div className="con-have">
            <img src="assets/image/haveddone1.png" alt="img" />
          </div>
          <div className="havedone-inner">
            <div className="havedone-inner-child">
              <Havedonepro title="identify problems" />
              <Havedonepro title="car washes" />
              <Havedonepro title="car painting" />
            </div>
            <div className="havedone-inner-child">
              <div className="img">
                <img src="assets/image/havedone3.png" alt="img" />
                <img src="assets/image/havedone2.png" alt="img" />
              </div>
            </div>
            <div className="havedone-inner-child sec" >
              <Havedonepro2 title="auto partds" />
              <Havedonepro2 title="guarantee" />
              <Havedonepro2 title="auto repair" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Havedone;
