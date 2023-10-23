import React from "react";
import './ServiceSubComp.css'
export const TwoPartGridLeft = (props) => {
  return (
    <>
      <div>
        <div className="row aline-item-center my-3">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center  fw-bold mt-3">
              {props.title}
            </h3>
            <p style={{textShadow:'-4px 4px 3px rgba(167, 160, 160, 0.74)'}} className="text-md-start text-center  mt-2">
              {props.Discription}
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img className="servie-grid-image"
                style={{ width: "50%" }}
                src={props.ImageHandle}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TwoPartGridRight = (props) => {
  return (
    <>
      <div>
        <div className="row aline-item-center flex-row-reverse my-3">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center  fw-bold mt-3">
              {props.title}
            </h3>
            <p style={{textShadow:'-4px 4px 3px rgba(167, 160, 160, 0.74)'}} className="text-md-start text-center  mt-2">
              {props.Discription}
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                className="servie-grid-image"
                style={{ width: "50%" }}
                src={props.ImageHandle}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


