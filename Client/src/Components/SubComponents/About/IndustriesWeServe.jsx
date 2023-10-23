import React from "react";
import {
  BsFillTrainFreightFrontFill,
  BsBuildingsFill,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { IoShareSocialOutline, IoBagHandle } from "react-icons/io5";
import {
  MdHealthAndSafety,
  MdSportsCricket,
  MdBusinessCenter,
  MdHotel,
  MdFastfood,
} from "react-icons/md";

const IndustriesWeServe = () => {
  return (
    <>
      <section className="home-Testimonials py-5 ">
        <div className="industries-container m-auto container d-flex flex-wrap justify-content-center aline-item-center">
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <BsFillTrainFreightFrontFill className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Traveling</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <BsBuildingsFill className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Real Estate</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <IoShareSocialOutline className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Social Networking</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <MdHealthAndSafety className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Healthcare</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <IoBagHandle className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>E-commerce</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <BsFillCreditCard2FrontFill className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Banking</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <MdSportsCricket className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Sports</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <MdBusinessCenter className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Business</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <MdFastfood className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Restraunts</h5>
            </div>
          </div>
          <div className="industries-card d-flex justify-content-between aline-item-center p-2 gap-2">
            <div className="ic-img">
              <MdHotel className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Hotel</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesWeServe;
