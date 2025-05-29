import React from "react";

const Brandprops = (abc) => {
  return (
    <>
      <div className="brand-inner-child">
        <div className="img">
          <img src={abc.img} alt="img" />
        </div>
      </div>
    </>
  );
};

const Brandprops2 = (abc) => {
  return (
    <>
      <div className="brand-inner-child">
        <div className="img">
          <img src={abc.img} alt="img" />
        </div>
      </div>
    </>
  );
};

export { Brandprops, Brandprops2 };
