import React from "react";

const Blogpro = (a) => {
  return (
    <>
      <div className="blog-inner-child">
        <div className="img">
          <img src={a.img}alt="img" />
        </div>
        <div className="date">
          <strong>{a.date}</strong>
          <span>{a.month}</span>
        </div>
        <div className="text">
          <a className="a1" href="#">
            {a.title}
          </a>
          <span>
            A ton of auto fix clients questions the <br />
            significance of wheel arrangement.
          </span>
          <a className="a2" href="#">
            read more
          </a>
          <div className="text2">
            <div className="img">
              <img src={a.img2} alt="img" />
            </div>
            <div className="text3">
              <strong>{a.name}</strong>
              <i className="far fa-comment-dots me-2"></i>
              <span>{a.num}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogpro;
