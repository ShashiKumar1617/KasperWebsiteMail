import React from "react";
import Service1 from "../../../Assets/Images/Services/Service1.webp";
import Service2 from "../../../Assets/Images/Services/Service2.webp";
import Service3 from "../../../Assets/Images/Services/Service3.webp";
import Service4 from "../../../Assets/Images/Services/Service4.webp";
import Service5 from "../../../Assets/Images/Services/Service5.webp";
import Service6 from "../../../Assets/Images/Services/Service6.webp";

import "../SubComponents.css";

const AboutServices = () => {
  return (
    <>
      <section className="home-Service">
        <div className="container d-flex flex-column text-center pt-5 pb-5">
          <div className="highlights-text text-center">
            <h6>
              OUR SERVICES
              <span className="highlights-text-bg">SERVICES</span>
            </h6>
          </div>
          <div className="home-service-card-container d-flex flex-wrap justify-content-center mt-4">
            <div className="home-service-card d-flex flex-column">
              <div className="service-img">
                <img src={Service1} alt="Service" />
                <div className="service-overlay" />
              </div>
              <h5>
                Web Development
                <span className="service-double">Web Development</span>
              </h5>
            </div>
            <div className="home-service-card d-flex flex-column">
              <div className="service-img">
                <img src={Service2} alt="Service" />
                <div className="service-overlay" />
              </div>
              <h5>
                App Development{" "}
                <span className="service-double">App Development</span>
              </h5>
            </div>
            <div className="home-service-card d-flex flex-column">
              <div className="service-img">
                <img src={Service3} alt="Service" />
                <div className="service-overlay" />
              </div>
              <h5>
                Digital Marketing{" "}
                <span className="service-double">Digital Marketing</span>
              </h5>
            </div>
            <div className="home-service-card d-flex flex-column">
              <div className="service-img">
                <img src={Service4} alt="Service" />
                <div className="service-overlay" />
              </div>
              <h5>
                CRM Development{" "}
                <span className="service-double">CRM Development</span>
              </h5>
            </div>
            <div className="home-service-card d-flex flex-column">
              <div className="service-img">
                <img src={Service5} alt="Service" />
                <div className="service-overlay" />
              </div>
              <h5>
                ERP Development{" "}
                <span className="service-double">ERP Development</span>
              </h5>
            </div>
            <div className="home-service-card d-flex flex-column">
              <div className="service-img">
                <img src={Service6} alt="Service" />
                <div className="service-overlay" />
              </div>
              <h5>
                UX/UI Degsines{" "}
                <span className="service-double">UX/UI Degsines</span>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutServices;
