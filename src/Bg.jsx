import React from "react";

 
const Bg = () =>{
    return(
        <>
        <div className="bg-outer">
        <div className="img">
            <img src="assets/image/bg-03.jpg" alt="img" />
            <div className="back"></div>
        </div>
        <div className="bg-inner">
            <div className="child2">
                <div className="owl-carousel owl-theme loop nonloop">
                    <div className="bg-inner-child">
                        <div className="text">
                            <strong>66</strong>
                            <p>
                                I wish I would have thought of it first. I just can't get
                                <br />
                                enough of motor. I want to get a T-Shirt with motor on it so
                                <br />
                                I can show it off to everyone. It fits our needs perfectly.
                            </p>
                            <div className="pho">
                                <div className="img">
                                    <img src="assets/image/bg1.jpg" alt="img" />
                                </div>
                                <div className="text1">
                                    <span>william knapp</span>
                                    <p>customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-inner-child">
                        <div className="text">
                            <strong>66</strong>
                            <p>
                                Motor services was worth a fortune to my company. <br />
                                Without motor services, we would have gone bankrupt by <br />
                                now. I couldn't have asked for more than this.
                            </p>
                            <div className="pho">
                                <div className="img">
                                    <img src="assets/image/bg3.jpg" alt="img" />
                                </div>
                                <div className="text1">
                                    <span>maryann sears</span>
                                    <p>customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-inner-child">
                        <div className="text">
                            <strong>66</strong>
                            <p>
                                We've seen amazing results already. I made back the <br />
                                purchase price in just 48 hours! Thanks guys, keep up the
                                <br />
                                good work! I can't say enough about car reparing.
                            </p>
                            <div className="pho">
                                <div className="img">
                                    <img src="assets/image/bg2.jpg" alt="img" />
                                </div>
                                <div className="text1">
                                    <span>devid price</span>
                                    <p>customer</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>

    {/* <script>
        $(".loop").owlCarousel({
            center: true,
            items: 2,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            margin: 10,
            responsive: {
                1200: {
                    items: 1,
                },
            },
        });
        $(".nonloop").owlCarousel({
            center: true,
            items: 2,
            loop: false,
            margin: 10,
            responsive: {
                1200: {
                    items: 1,
                },
            },
        });
    </script> */}
        </>
    )
}

export default Bg;