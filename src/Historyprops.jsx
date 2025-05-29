import React from "react";

const Historyprops = (abc) => {
  return (
    <>
      <div className="histoy-img">
         <div className="year">
            {abc.year}
        </div>
        <img src={abc.img} alt="img" />
        <strong>{abc.title}</strong>
        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum
        </p>
      </div>
    </>
  );
};

const Historyprops2 = (abc) => {
  return (
    <>
      <div className="histoy-img">
      <div className="year2">
            {abc.year}
        </div>
        <img src={abc.img} alt="img" />
        <strong>{abc.title}</strong>
        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum
        </p>
      </div>
      
    </>
  );
};

export { Historyprops, Historyprops2 };
