import React from "react";

const ClientTestimonials = () => {
  return (
    <>
      <section className="home-Testimonials py-4 ">
        <div className="testimonials container d-flex flex-column justify-content-center aline-item-center text-center">
          <div className="highlights-text text-center">
            <h6>
              TESTIMONIALS
              <span className="highlights-text-bg">TESTIMONIALS</span>
            </h6>
          </div>
          <div className="testimonials-container py-3 px-3 mb-3">
            <div className="testimonials-card " draggable="false">
              <div className="Testimonial-img-box">
                <img src='' alt="" />
              </div>
              <h4>Shashi Kumar </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti sit aspernatur fugit! Iusto, consequuntur eum.
              </p>
              <h5>Front-End Developer</h5>
            </div>
            <div className="testimonials-card " draggable="false">
              <div className="Testimonial-img-box">
                <img src='' alt="" />
              </div>
              <h4>Afroz Zeelani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti sit aspernatur fugit! Iusto, consequuntur eum.
              </p>
              <h5>Fron-End Developer</h5>
            </div>
            <div className="testimonials-card " draggable="false">
              <div className="Testimonial-img-box">
                <img src='' alt="" />
              </div>
              <h4>Amar Kumar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti sit aspernatur fugit! Iusto, consequuntur eum.
              </p>
              <h5>Back-End Developer</h5>
            </div>
            <div className="testimonials-card " draggable="false">
              <div className="Testimonial-img-box">
                <img src='' alt="" />
              </div>
              <h4>Kishore Kumar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti sit aspernatur fugit! Iusto, consequuntur eum.
              </p>
              <h5>Director</h5>
            </div>
            <div className="testimonials-card " draggable="false">
              <div className="Testimonial-img-box">
                <img src='' alt="" />
              </div>
              <h4>Ashish Kumar</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti sit aspernatur fugit! Iusto, consequuntur eum.
              </p>
              <h5>General Manager</h5>
            </div>
          </div>
          <div className="row justify-content-center justify-content-center">
            <div className="col-1">
              <button
                id="back"
                className=" stepper-btn  go-previous fw-bold fs-3 d-flex flex-column justify-content-center aline-item-center"
              >
                ←
              </button>
            </div>
            <div className="col-1">
              <button
                id="next"
                className=" stepper-btn go-Next fw-bold fs-3 d-flex flex-column justify-content-center aline-item-center"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonials;
