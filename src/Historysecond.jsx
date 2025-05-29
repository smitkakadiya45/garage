import React from "react";
import { Historyprops, Historyprops2 } from "./Historyprops";


const Historysecond = () => {
  return (
    <>
      <div className="history-outer">
        <div className="container">
          <div className="history-title">
            <p>our workshop history</p>
            <div className="h-t"></div>
          </div>
          <div className="history-inner">
            <div className="history-inner-child" style={{padding:"0",paddingRight:"130px", textAlign:"right"}}>
                <div className="history-child">
                    <strong>
                        general car
                    </strong>
                    <p>
                        service center
                    </p>
                </div>
              <Historyprops2
                title="Start with small space"
                img="assets/image/h2.jpg"
                year="2003"
              />
              <Historyprops2
                title="Start with small space"
                img="assets/image/h4.jpg"
                year="2021"
              />
            </div>
            <div className="history-inner-child">
              <Historyprops
                title="Start with small space"
                img="assets/image/h1.jpg"
                year="1995"
              />
              <Historyprops
                title="Start with small space"
                img="assets/image/h3.jpg"
                year="2018"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historysecond;
