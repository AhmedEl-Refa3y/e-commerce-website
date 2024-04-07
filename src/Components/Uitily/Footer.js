import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="4" className="d-flex align-items-center ">
            {" "}
            <div class="info mb-5 text-sm-center text-md-start">
              <img src={logo} alt="" class=" d-flex m-auto mb-4 logo" />
              <p class="mb-5 text-black-50">
                Foundation is a website template for startups and small teams.
                It helps to build a website in n
              </p>
              <div class="">
                <ul class="list-unstyled d-flex justify-content-around">
                  <li class="text-black-50">Terms</li>
                  <li class="text-black-50">Privacy</li>
                  <li class="text-black-50">License</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            xs="4"
            sm="4"
            className="d-flex justify-content-end align-items-center "
          >
            {" "}
            <div class="links" style={{ direction: "ltr" }}>
              <h5 class="text-dark text-start">Product</h5>
              <ul class="list-unstyled lh-lg">
                <li class="text-black-50">Acquire Users</li>
                <li class="text-black-50">Content Marketing</li>
                <li class="text-black-50">Website Templates</li>
                <li class="text-black-50">Customer Management</li>
                <li class="text-black-50">Virtual Inbox</li>
              </ul>
            </div>
          </Col>
          <Col
            xs="4"
            sm="4"
            className="d-flex justify-content-end align-items-center "
          >
            <div class="links" style={{ direction: "ltr" }}>
              <h5 class="text-dark text-start">Company</h5>
              <ul class="list-unstyled lh-lg">
                <li class="text-black-50">About Foundation</li>
                <li class="text-black-50">Brand Guidelines</li>
                <li class="text-black-50">Press Kit</li>
                <li class="text-black-50">Support</li>{" "}
                <div className="d-flex">
                  {" "}
                  <div
                    className=" p-2 text-black-50"
                    style={{ cursor: "pointer" }}
                  >
                    <img width="20px" height="20px" src={facebook} alt="" />
                  </div>
                  <div
                    className=" p-2 text-black-50"
                    style={{ cursor: "pointer" }}
                  >
                    <img width="20px" height="20px" src={instagram} alt="" />
                  </div>
                  <div
                    className=" p-2 text-black-50"
                    style={{ cursor: "pointer" }}
                  >
                    <img width="20px" height="20px" src={twitter} alt="" />
                  </div>{" "}
                </div>
              </ul>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
