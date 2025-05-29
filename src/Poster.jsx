import React from "react";
import { Link } from "react-router-dom";

const Poster = () => {
    return (
        <>

            <div className="poster-outer">
                <div className="poster-inner">
                    <div className="poster-inner-child">
                        <div className="color">
                            <div className="text">
                                <p>
                                    <strong> the best car services provides </strong>
                                    <span>
                                        We represent considerable authority in canny and successful
                                        Search and has faith <br />
                                        in the force of organizations to develop business.
                                    </span>
                                    <Link to = "/service"> get a services </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Poster;