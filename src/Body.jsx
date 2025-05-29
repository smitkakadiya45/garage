import React from "react";
import Poster from "./Poster";
import Best from "./Best";
import Success from "./Success";
import Specialservice from "./Specialservice";
import Havedone from "./Havedone";
import Process from "./Process";
import Blog from "./Blog";
import Bg from "./Bg";
import Excellent from "./Excellent";
import Workers from "./Workers";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
  return (
    <>
    <Header/>
    <Poster />
    <Best />
    <Success/>
    <Specialservice/>
    <Havedone/>
    <Workers/>
    <Process/>
    <Excellent/>
    <Bg/>
    <Blog/>
    <Footer/>
    </>
  )
}


export default Body;