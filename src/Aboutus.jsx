import React from "react";
import Aboutsecond from "./Aboutsecond";
import Aboutfirst from "./Aboutfirst";
import Aboutthird from "./Aboutthird";
import Aboutsixth from "./Aboutsixth";
import Footermiddle from "./Footermiddle";
import Footerbottom from "./Footerbottom";
import Excellent from "./Excellent";
import Process from "./Process";
import Header from "./Header";

const Aboutus = () => {
  return (
    <>
    <Header/>
    <Aboutfirst/>
      <Aboutsecond/>
      <Aboutthird/>
      <Process/>
      <Excellent/>
      <Aboutsixth/>
      <Footermiddle/>
      <Footerbottom/>
    </>
  );
};

export default Aboutus;
