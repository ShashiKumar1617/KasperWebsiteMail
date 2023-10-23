import React from "react";
import ServiceMainSection from "../SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";

const FaqComp = (props) => {
  return (
    <>
      <ServiceMainSection highlights="F. A. Q." highlightsDouble="F A Q"  heading="Frequently Asked Questions"/>
      <div className="row container m-auto ">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header text-start" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {props.FirstQuestion}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body  text-start">
              {props.FirstAnswer}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header  text-start" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                {props.SecondQuestion}
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body  text-start">
              {props.SecondAnswer}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header  text-start" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                {props.ThirdQuestion}
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body  text-start">
              {props.ThirdAnswer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqComp;
