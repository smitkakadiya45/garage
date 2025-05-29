import React from "react";
import {Processpro } from "./Processpro";
import Aos from "aos";


const Process = () => {
    Aos.init();
    return(
        <>
        <div className="process-outer">
        <div className="container">
        <div >
            <div className="process-title" >
                <p>our work process</p>
                <div className="p-t"></div>
                <div className="process-t">
                    Our car rental services, in the travel industry and business
                    industry,<br />
                    stand apart for their quality and great taste
                </div>
            </div>
            </div>
            <div className="process-inner">
            <div className="process-inner-child child1">
                <Processpro num="1" title="choose services" />
                </div>
                <div className="process-inner-child child1">
                <Processpro num="2" title="make appointment" />
                </div>
                <div className="process-inner-child child1">
                <Processpro num="3" title="confirm request" />
                </div>
                <div className="process-inner-child">
                <Processpro num ="4" title="pick up car" />
                </div>
            </div>
        </div>
    </div>

        </>
    )
}


export default Process;