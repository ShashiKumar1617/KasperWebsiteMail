import React from "react";
import Director2 from  '../../../Assets/Images/About/director2.jpeg'
import Director1 from  '../../../Assets/Images/About/Diretor1.jpeg'

import '../SubComponents.css'

const AboutDirector = () => {
  return (
    <>
      <section className="home-about pt-5 pb-5">
        <div className="container d-flex flex-column justify-content-center aline-item-center text-center">
          <div className="about-container d-flex  gap-4 flex-wrap justify-content-between">
            <div className="about-container-content d-flex flex-column justify-content-between">
              <div className="highlights-text text-center">
                <h6>
                  ABOUT US <span className="highlights-text-bg">ABOUT</span>{" "}
                </h6>
              </div>
              <h4 className="fw-bold mb-3">
                #1 Digital Solution With{" "}
                <span style={{ color: "rgb(15, 110, 100)" }}>8 Years</span> Of
                Experience
              </h4>
              <p>
                Kasper Infotech is your trustworthy partner for all web
                development and digital marketing needs. Experience perfection
                with them. Our dynamic and creative team is committed to helping
                organizations achieve their online goals and grow their digital
                footprint.
              </p>
              <p>
                Kasper takes immense pride in providing the best web development
                services to its clients. We are an innovative web development
                and digital marketing company. Kasper is very enthusiastic and
                passionate about creating outstanding online experiences. Our
                Company always works with or according to the trend; we believe
                in adopting the latest technology and trend.
              </p>
              <div className="d-flex flex-wrap mt-3 m-auto gap-5">
                <div className=" d-flex gap-3">
                  <div className=" director-img">
                    <img src={Director2} alt="Kishore" />
                  </div>
                  <div className="text-start">
                    <h6 className="fw-bold">Kishor Kumar</h6>
                    <small>Director</small>
                  </div>
                </div>
                <div className=" d-flex gap-3">
                  <div className=" director-img">
                    <img src={Director1} alt="Lakshmi" />
                  </div>
                  <div className="text-start">
                    <h6 className="fw-bold">Lakshmi Mittal</h6>
                    <small>Director</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDirector;
