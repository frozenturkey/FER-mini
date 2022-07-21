import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Shopee is the leading e-commerce platform in Southeast Asia and
              Taiwan. Launched in 2015, it is a platform tailored for the
              region, providing customers with an easy, secure and fast online
              shopping experience through strong payment and fulfillment
              support. We believe online shopping should be accessible, easy and
              enjoyable. This is the vision Shopee aspires to deliver on the
              platform, every single day.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000"
              alt="About Us"
              height="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
