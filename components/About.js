import React from "react";
import { Container } from "react-bootstrap";
import circleimage from "../public/assets/images/Circle Images-4.png";

function About(props) {
  return (
    <div id="About" className="py-5">
      <Container>
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 py-5">
            <h1 className="text-secondary">About</h1>
            <a href="#contact" className="text-decoration-none mb-5"><h5 className=" fw-bold ">scheduled your tour experience</h5></a>
            <p>
            Located in the heart of NW DC, Seneca House boasts close proximity to conveniences such as shopping, dining, markets, nightlife, and entertainment, and is just steps to the idyllic Meridian Hill Park. Each home at Seneca House features distinct design touches, chosen to reflect the building&apos;s unique character and your individuality.
            </p>
           
          </div>
          <div
            className="col-12 col-md-5"
            style={{
              backgroundImage: `url("${circleimage.src}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </Container>
    </div>
  );
}

export default About;
