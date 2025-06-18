import React from "react";
import Contactfirst from "./Contactfirst";
import Contactsecond from "./Contactsecond";
import Contactlast from "./Contactlast";
import Footermiddle from "./Footermiddle";
import Footerbottom from "./Footerbottom";
import Header from "./Header";
import { Provider } from "react-redux";
import { st } from "./Redux";
// import Loader from "./Loader";
// import Loader from "./Loader";

const Contact = () => {

  return (
    <>
      <Header />
      <Provider store={st}>
        <Contactfirst />
        <Contactsecond />
        <Contactlast />
        <Footermiddle />
        <Footerbottom />
      </Provider>
    </>
  );
};

export default Contact;
