import React from 'react';
import { Link } from 'react-router-dom';




const Bestpro = (abc) => {
    return (
        <>
                <div className="img">
                    <img src={abc.img} alt="service" />
                    <div className="b-h">
                        <p>
                            <a href="#">{abc.title}</a>
                            <span>
                                We will help return your car to a <br />
                                functioning condition
                            </span>
                            <Link to={"/service"} className="r" href="#">
                                read more
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </p>
                    </div>
                    <div className="text">
                        <p>
                            <span> 1 </span>
                            <strong>{abc.title} </strong>
                        </p>
                    </div>
                </div>
        </>
    );
};

export default Bestpro;