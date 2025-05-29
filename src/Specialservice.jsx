import React from "react";
import Specialservicepro from "./Specialservicepro";
import Aos from "aos";



const Specialservice = () => {

    Aos.init();

    return (

        <>
            <div className="special-outer">
                <div className="container">
                    <div>
                        <div className="special-title">
                            <p>our special services</p>
                            <div className="s-u-l"></div>
                            <div className="s-t">
                                Our car rental services, in the travel industry and business
                                industry,<br />
                                stand apart for their quality and great taste
                            </div>
                        </div>
                    </div>
                    <div className="special-inner">
                        <div className="special-innerf">
                            <div className="special-inner-child">
                                <Specialservicepro title="engine diagnostics" img="assets/image/service-01.jpg" />
                            </div>
                            <div className="special-inner-child">
                                <Specialservicepro title="oil and filters" img="assets/image/service-02.jpg" />
                            </div>
                            <div className="special-inner-child">
                                <Specialservicepro title="brake repair" img="assets/image/service-03.jpg" />
                            </div>
                        </div>
                        <div className="special-inners">
                            <div className="special-inner-child" >
                                <Specialservicepro title="wheel alignment" img="assets/image/service-04.jpg" />
                            </div>
                            <div className="special-inner-child">
                                <Specialservicepro title="general service" img="assets/image/service-05.jpg" />
                            </div>
                            <div className="special-inner-child">
                                <Specialservicepro title="bettry checking" img="assets/image/service-06.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Specialservice;