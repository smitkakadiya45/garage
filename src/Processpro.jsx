import React from "react";

const Processpro = (abc) => {
  return (
    <>
        <span>{abc.num}</span>
        <div className="text">
          <span>{abc.title}</span>
          <p>
            We help you discover any protection <br />
            inclusions that are ideal for you.
          </p>
        </div>
    </>
  );
};

export {Processpro};
