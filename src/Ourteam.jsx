import React from "react";
import First from "./First";
import Footerbottom from "./Footerbottom";
import Footermiddle from "./Footermiddle";
import Excellent from "./Excellent";
import Excellentpro from "./Excellentpro";
import Header from "./Header";

const Ourteam = () => {
  return (
    <>
    <Header/>
      <First title="our team" />
      <div className="excellent-outer">
        <div className="container">
          <div className="excellent-inner">
            <Excellentpro
              title="engine mechanic"
              name="robert blake"
              img="assets/image/ex1.jpg"
            />
            <Excellentpro
              name="elias moore"
              title="mechanic"
              img="assets/image/ex2.jpg"
            />
            <Excellentpro
              title="machanic expert"
              name="danny cranston"
              img="assets/image/ex3.jpg"
            />
          </div>
          <div className="excellent-inner">
            <Excellentpro
              img="assets/image/ex4.jpg"
              name="Anthony Evans"
              title="Engine Mechanic"
            />
            <Excellentpro
              img="assets/image/ex5.jpg"
              name="Anthony Evans"
              title="Engine Mechanic"
            />
            <Excellentpro
              img="assets/image/ex6.jpg"
              name="Anthony Evans"
              title="Engine Mechanic"
            />
          </div>
        </div>
      </div>

      <Footermiddle />
      <Footerbottom />
    </>
  );
};

export default Ourteam;
