import React from "react";
import { Container } from "react-bootstrap";

import heroRendering from "../public/assets/images/1471_Prev_06.webp";

function HeroImage(props) {
  return (
    <Container
      fluid
      style={{
        // backgroundImage: `url("${heroRendering.src}")`,
        height: "100vh",
        // backgroundImage: `linear-gradient(90deg, rgba(3,38,61,.75) 0%, rgba(3,38,61,.75) 20%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 64%, rgba(3,38,61,.75) 64%, rgba(3,38,61,.75) 100%), url("${heroRendering.src}")`,
        backgroundImage: `linear-gradient(90deg,  rgba(255,255,255,0) 75%, rgba(3,38,61,.75) 75%, rgba(3,38,61,.75) 100%), url("${heroRendering.src}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
      }}
    >
      <div className="row h-100 py-5">
        <div className="col-3 col-md-3"></div>
        <div className="col-5 col-md-6"></div>
        <div className="col-4 col-md-3 d-flex flex-column justify-content-center">
          <div className="px-3 py-md-5 my-md-5 mx-auto">
            <h1 className="display-4 text-secondary text-center py-5">
              Where <br /> <span className="fw-bold">Your Life</span>,<br />
              <span className="fw-bold text-white">Your Style</span>
              <span className="text-white">,</span> <br />&{" "}
              <span className="fw-bold">Your Home</span>
              <br /> Converge
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroImage;
