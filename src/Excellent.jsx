import React from "react";
import Excellentpro from "./Excellentpro";
import Aos from "aos";


const Excellent = () => {
    Aos.init();
    return (
        <>
            <div className="excellent-outer">
                <div className="container">
                    <div>
                        <div className="excellent-title">
                            <p>our excellent workers</p>
                            <div className="e-t"></div>
                            <div className="excellent-t">
                                Our car rental services, in the travel industry and business
                                industry,<br />
                                stand apart for their quality and great taste
                            </div>
                        </div>
                    </div>
                    <div className="excellent-inner">
                        <Excellentpro title="engine mechanic" name="robert blake" img="assets/image/ex1.jpg" />
                        <Excellentpro name="elias moore" title="mechanic" img="assets/image/ex2.jpg" />
                        <Excellentpro title="machanic expert" name="danny cranston" img="assets/image/ex3.jpg" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Excellent;