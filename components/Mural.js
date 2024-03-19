import React from "react";
import { Container } from "react-bootstrap";
import circleimage from "../public/assets/images/Circle Images-4.png";

function Mural(props) {
  return (
    <div id="Mural" className="py-5">
      <Container>
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 py-5">
            <h1 className="text-secondary">Mural</h1>
            <a href="#contact" className="text-decoration-none mb-5"></a>
            <p>
              Seneca House&apos;s custom mural stands out from the crowd.
              Designed and painted by Hamilton Glass, it features a hopeful
              child engaging in the tradition of blowing on dandelion seeds as a
              wish is made. Especially in uncertain times, we all hope and wish
              for positive outcomes. The artist&apos;s gradual transition from
              grayscale to full-color beautifully symbolizes the wish eventually
              coming true.
            </p>
            <h5 className=" fw-bold text-secondary">experience seneca house</h5>
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

export default Mural;
