import React from "react";
import Contactfirst from "./Contactfirst";
import Contactsecond from "./Contactsecond";
import Contactlast from "./Contactlast";
import Footermiddle from "./Footermiddle";
import Footerbottom from "./Footerbottom";
import Header from "./Header";

const Contact = () => {
  return (
    <>
    <Header/>
      <Contactfirst />
      <Contactsecond />
      <Contactlast />
      <Footermiddle />
      <Footerbottom />
    </>
  );
};

export default Contact;
