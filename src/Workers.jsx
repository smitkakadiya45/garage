import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// import React from "react";


const Workers = () => {
    return (
        <>  <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <div className="workers-outer">
                <div>
                    <div className="workers-title">
                        <p>our excellent workers</p>
                        <div className="w-t"></div>
                        <div className="workers-t">
                            Our car rental services, in the travel industry and business
                            industry,<br />
                            stand apart for their quality and great taste
                        </div>
                    </div>
                </div>
                <div className="workers-inner">
                    <div className="owl-carousel owl-theme loop nonloop">
                        <SwiperSlide>
                            <div className="workers-inner-child">
                                <div className="item">
                                    <img src="assets/image/wo1.jpg" alt="img" />
                                </div>
                                <div className="text">
                                    <Link to="#">engine servicing</Link>
                                    <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="workers-inner-child">
                                <div className="item">
                                    <img src="assets/image/wo2.jpg" alt="img" />
                                </div>
                                <div className="text">
                                    <Link style={{ paddingRight: "98px" }} to="#">Dent repair glass</Link>
                                    <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="workers-inner-child">
                                <div className="item">
                                    <img src="assets/image/wo3.jpg" alt="img" />
                                </div>
                                <div className="text">
                                    <Link to="#">wheel servicing</a>
                                    <Link to="#"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>\
                            <div className="workers-inner-child">
                                <div className="item">
                                    <img src="assets/image/wo4.jpg" alt="img" />
                                </div>
                                <div className="text">
                                    <a style={{ paddingRight: "98px" }} href="#">car washing</a>
                                    <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="workers-inner-child">
                                <div className="item">
                                    <img src="assets/image/wo5.jpg" alt="img" />
                                </div>
                                <div className="text">
                                    <Link to="#">car diagnostic</Link>
                                    <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="workers-inner-child">
                                <div className="item">
                                    <img src="assets/image/wo6.jpg" alt="img" />
                                </div>
                                <div className="text">
                                    <Link to="#">car washing</Link>
                                    <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>
            </div>
        </Swiper>
        </>
    )
}


export default Workers;