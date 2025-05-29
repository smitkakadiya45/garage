import React from "react";


const Contactsecpro = (abc) => {
    return(
        <>
           <div className="contant-inner-child">
              <div className="img">
                <img src={abc.img} alt="img" />
                <div className="text">
                  <i className="fa-solid fa-location-dot"></i>
                  <strong>{abc.name}</strong>
                  <span>{abc.add}</span>
                </div>
              </div>
            </div>
        </>
    )
}   

export default Contactsecpro;   