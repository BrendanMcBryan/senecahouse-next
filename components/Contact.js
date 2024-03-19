import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Basic from "./Basic";
import mapImage from "../public/assets/images/mapSS.png";
import ContactTest from "./ContactTest";
function Contact(props) {
  return (
    <div className="py-md-5" id="Contact">
      <Container>
        <div className="row my-5">
          <div className="col">
            <h1 className="text-center text-secondary fw-bold">
              We’d Love to Hear From You
            </h1>
          </div>
        </div>
        <div className="row justify-content-between pt-5">
          <div className="col col-md-4">
            <a
              href="https://www.google.com/maps/place/1471+Florida+Ave+NW,+Washington,+DC+20009/@38.9197457,-77.0342066,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b7dd9a4056dd:0x7140bf775bd4b895!8m2!3d38.9197457!4d-77.0342066"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <address>
                1471 Florida Ave NW
                <br /> Washington, DC 20009
              </address>
            </a>
            <a href="tel:2025806003" className="text-decoration-none">
              <address className="my-5">tel: 202.580.6003</address>
            </a>
            <a
              href="https://www.google.com/maps/place/1471+Florida+Ave+NW,+Washington,+DC+20009/@38.9197457,-77.0342066,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b7dd9a4056dd:0x7140bf775bd4b895!8m2!3d38.9197457!4d-77.0342066"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mapImage.src}
                alt="map Image"
                style={{ width: "100%" }}
                className="my-5"
              />
            </a>
          </div>

          <div className="col col-md-7">
            {/* <Basic /> */}
            {/* <ContactTest /> */}
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
