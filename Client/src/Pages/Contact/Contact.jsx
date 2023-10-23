import React, { useState } from "react";
import "./Contact.css";
import {BsGlobeAsiaAustralia, BsFillTelephoneFill, BsEnvelopeFill, BsPinMapFill, BsFillClockFill} from 'react-icons/bs'
const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { firstname,lastname, email,mobile,requirement, message } = e.target.elements;
      let details = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        mobile: mobile.value,
        requirement:requirement.value,
        message:message.value,
      };
      let response = await fetch("http://localhost:5000/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
      window.location.reload()
    };
  return (
    <>
      <section className="home-Contact py-4 px-1">
        <div className="container">
          <div className="highlights-text text-center">
            <h6>
              CONTACT US
              <span className="highlights-text-bg">CONTACT</span>
            </h6>
            <h5 className="text-center fs-5 m-auto pb-5">
              We are just one click away!
            </h5>
          </div>
          <div className="row p-2 contact">
            <div className="contact-block-1 col-12 col-lg-6 d-flex flex-column justify-content-between py-4">
              <div className="left-top-block text-start">
                <h2>👋 Get In Touch </h2>
                <p>
                  Fill up the form or contact us directly for any requirement.
                </p>
                <hr/>
              </div>
              <div className="left-Middle-block">
                <p className="d-flex gap-3">
                  <span>
                    <BsGlobeAsiaAustralia/>
                  </span>
                  www.kasperinfotech.org
                </p>
                <p className="d-flex gap-3">
                  <span>
                    <BsFillTelephoneFill/>
                  </span>
                  +91-800-623-6800
                </p>
                <p className="d-flex gap-3">
                  <span>
                    <BsEnvelopeFill/>
                  </span>
                  info@kasperinfotech.org
                </p>
                <p className="d-flex gap-3">
                  <span>
                    <BsEnvelopeFill/>
                  </span>
                  sales@kasperinfotech.org
                </p>
                <p className="d-flex gap-3 text-start">
                  <span>
                    <BsPinMapFill/>
                  </span>
                  Office Number 214, Tower B, The iThum Towers, Sector 62,
                  Noida, Uttar Pradesh 201301
                </p>
                <p className="d-flex gap-3">
                  <span>
                    <BsFillClockFill/>
                  </span>{" "}
                  Monday - Saturday (9:30AM - 6:30PM){" "}
                </p>
              </div>
            </div>
            <div className="contact-block-2 col-12 col-lg-6 pt-4">
              <form action className="d-flex flex-column gap-3 "  form onSubmit={handleSubmit}>
                <div className="name-block d-flex gap-4 justify-content-between">
                  <div className="c-section fname d-flex flex-column">
                    <label htmlFor>First Name</label>
                    <input type="text" id="firstname"name="firstname" placeholder="First Name" />
                  </div>
                   <div className="c-section lname d-flex flex-column">
                    <label htmlFor>Last Name</label>
                    <input type="text" id="lastname" name ="lastname" placeholder="Last Name" />
                  </div> 
                </div>
                <div className="contact-address-block d-flex gap-4 justify-content-between">
                  <div className="c-section email d-flex flex-column">
                    <label htmlFor>Email</label>
                    <input type="email" id="email" name="email" placeholder="sample@abc.com" />
                  </div>
                  <div className="c-section Cnumber d-flex flex-column">
                    <label htmlFor>Contact Number</label>
                    <input type="text" id="mobile" maxLength={10} inputMode="Numeric" pattern="[0-9]{10}" name="mobile" placeholder="Contact Number" />
                  </div>
                </div>
                <div className="contact-query d-flex flex-column gap-3">
                  <label htmlFor="contact-query">Select your requirement</label>
                  <div className="contact-query d-flex flex-wrap">
                    <p>
                      <input
                        type="radio"
                        id="requirement"
                        name="requirement"
                        defaultValue="Web Development"
            
                      />
                      <span>Web Development</span>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="requirement"
                        name="requirement"
                        defaultValue="App Development"
                      
                      />
                      <span>App Development</span>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="requirement"
                        name="requirement"
                        defaultValue="Digital-Marketing"
                      
                      />
                      <span>Digital Marketing</span>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="requirement"
                        name="requirement"
                        defaultValue="CMS"
                        
                      />
                      <span>CMS Development</span>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="requirement"
                        name="requirement"
                        defaultValue="ERP"
                        
                      />
                      <span>ERP Development</span>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="requirement"
                        name="requirement"
                        defaultValue="Others"
                  
                      />
                      <span>Others</span>
                    </p>
                 </div>
                  <div className="contact-massage d-flex flex-column">
                    <label htmlFor>message</label>
                    <textarea
                     id="message"
                     name="message"
                      rows={2}
                      placeholder="write your massage here"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <input
                  className="submitmassage"
                  type="submit"
                  value="SUBMIT"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;