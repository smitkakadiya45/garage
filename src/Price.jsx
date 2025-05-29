import React from "react";  
import Footermiddle from "./Footermiddle";
import Footerbottom from "./Footerbottom";
import Priceprops from "./Priceprops";
import First from "./First"
import Header from "./Header";


const Price = () => {
    return(
        <>
        <Header/>
        <First title="pricing"/>
        <div className="price-outer">
            <div className="container">
            <div className="excellent-title">
                <p>Our best pricing plans</p>
                <div className="e-t"></div>
                <div className="excellent-t">
                    Our car rental services, in the travel industry and business
                    industry,<br />
                    stand apart for their quality and great taste
                </div>
            </div>
                <div className="price-inner">
                    <Priceprops title="standard" p="59" logo1="fas fa-times-circle text-secondary me-3" logo2="fas fa-times-circle text-secondary me-3" logo3="fas fa-times-circle text-secondary me-3"/>
                    <Priceprops title="premium" p="79" logo1="fas fa-check-circle text-secondary me-3"  logo2="fas fa-times-circle text-secondary me-3" logo3="fas fa-times-circle text-secondary me-3"/>
                </div>
                <div className="price-inner">
                    <Priceprops title="extended" p="99"  logo1="fas fa-check-circle text-secondary me-3"  logo2="fas fa-check-circle text-secondary me-3" logo3="fas fa-times-circle text-secondary me-3" />
                    <Priceprops title="ultimate" p="129" logo1="fas fa-check-circle text-secondary me-3"  logo2="fas fa-check-circle text-secondary me-3" logo3="fas fa-check-circle text-secondary me-3"  />
                </div>
            </div>
        </div>
            <Footermiddle/>
            <Footerbottom/>
        </>
    )
}


export default Price;