import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="home-footer pb-1 mt-5">
      <div className="social-media container d-flex justify-content-between pt-3 pb-3 aline-item-center">
        <h6 className="text-white fw-normal pt-1">Follow Us On :</h6>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/kasperinfotech/">
            <BsFacebook className="social-icons" />
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/kasperInfotech3">
            <RiTwitterXFill  className="social-icons"/>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/kasperinfo/">
            <FaInstagram  className="social-icons"/>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=918006384800&text&type=phone_number&app_absent=0">
            <FaWhatsapp  className="social-icons"/>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UC6ESBRbPwHhc9edkv1yTt8Q">
            <FaYoutube  className="social-icons"/>
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://in.linkedin.com/company/kasper-infotech">
            <FaLinkedin className="social-icons" />
          </a>
        </li>
      </div>
        <hr className="m-0 mb-3" style={{ opacity: "10%" }} />
      <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3  my-2">
        <h6 className="text-lg-start text-md-center">Useful Links</h6>
            <div class="footer-links align-items-sm-center align-items-lg-start">
              <li><a href="a">Home</a></li>
              <li><a href="a">About us</a></li>
              <li><a href="a">Career</a></li>
              <li><a href="a">Contact</a></li>
              <li><a href="a">Privicy Policy</a></li>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 my-2">
        <h6 className="text-lg-start text-md-center">Digital Marketing</h6>
            <div class="footer-links align-items-sm-center align-items-lg-start">
              <li><a href="a">ASO Services</a></li>
              <li><a href="a">SEO Services</a></li>
              <li><a href="a">Content Writting</a></li>
              <li><a href="a">Pay Per Click</a></li>
              <li><a href="a">Social Media Marketing</a></li>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 my-2">
        <h6 className="text-lg-start text-md-center">Development Services</h6>
            <div class="footer-links align-items-sm-center align-items-lg-start">
              <li><a href="a">Web Development</a></li>
              <li><a href="a">App Development</a></li>
              <li><a href="a">CMS Services</a></li>
              <li><a href="a">CRM Services</a></li>
              <li><a href="a">ERP Services</a></li>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 my-2">
        <h6 className="text-lg-start text-md-center">Industries Services</h6>
            <div class="footer-links align-items-sm-center align-items-lg-start">
              <li><a href="a">Business</a></li>
              <li><a href="a">Healthcare</a></li>
              <li><a href="a">E-commerce</a></li>
              <li><a href="a">Real Estate</a></li>
              <li><a href="a">Travel</a></li>
            </div>
        </div>
      </div>
      </div>



        <div className="subfooter mt-5 mb-2 p-1">
          <p className="text-center m-0">
            © Copyright 2016- 2023 <b>Kasper Infotech Pvt. Ltd.</b> All Rights
            Reserved{" "}
          </p>
          <p className="text-center m-0">
            Designed by{" "}
            <a href="https://kasperinfotech.org">Kasper Infotech Pvt. Ltd.</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
