import React from "react";

const ServiceMainSection = (props) => {
  return (
    <>
      <div className="service-main">
        <div className="container">
          <div className="row">
            <div className="highlights-text text-center pt-4">
              <h6>
                {props.highlights}
                <span className="highlights-text-bg">{props.highlightsDouble}</span>
              </h6>
            </div>
            <h6 className="m-auto mb-2">
            {props.heading}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceMainSection;
