import React from "react";
import Historyfirst from "./Historyfirst";
import Aboutsixth from "./Aboutsixth";
import Footermiddle from "./Footermiddle";
import Footerbottom from "./Footerbottom";
import Historysecond from "./Historysecond";
import Excellent from "./Excellent";
import Header from "./Header";

const Ourhistory = () => {
  return (
    <>
    <Header/>
        <Historyfirst />
        <Historysecond/>
        <Excellent/>
        <Aboutsixth/>
        <Footermiddle/>
        <Footerbottom/>
    </>
  );
};

export default Ourhistory;