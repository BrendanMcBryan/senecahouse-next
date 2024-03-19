import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import circleimage from "../public/assets/images/Circle Images-3.png";
import Gallery from "./Gallery";
import viewMapButton from "../public/assets/images/ViewMapButton.png";
import mapSS from "../public/assets/images/Seneca House Amenity Map d6.webp";

import Modal from "react-bootstrap/Modal";

const mapButtonStyles = { width: "33%" };

function Neighborhood(props) {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className="bg-primary py-md-5" id="Neighborhood">
      <Container>
        <div className="row justify-content-between">
          <div
            className="col-12 col-md-5 d-flex flex-column justify-content-end ps-5"
            style={{
              backgroundImage: `url("${circleimage.src}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <img
              onClick={handleShow}
              src={viewMapButton.src}
              alt="viewMap"
              style={mapButtonStyles}
            />
          </div>
          <div className="col-12 col-md-6 py-3">
            <h1 className="text-secondary text-center pb-5">Neighborhood</h1>

            <p className="text-white">
              This block of Florida Avenue, lined with trees and historical
              townhouses, is a peaceful oasis among the vibrant surrounding
              neighborhoods and steps away from Meridian Hill Park. This
              location couple&apos;s sensibility with the best of modern, urban
              life&apos;s accoutrements. Seneca House is walkable to Columbia
              Heights, Adams Morgan, The U Street Corridor, and all the
              excitement these neighborhoods have to offer.{" "}
            </p>
            <p className="text-white">
              Add to this cultural epicenter a walk score of 96, a transit score
              of 82 and bike score of 84, calling the Seneca House home means
              you can truly have it all, in the center of it all.
            </p>
          </div>
        </div>
      </Container>
   

      <Modal
        show={show}
        centered
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        {/* <Modal.Header closeButton> */}
        {/* <Modal.Title>Modal heading</Modal.Title> */}
        {/* </Modal.Header> */}
        <Modal.Body closeButton>
          <img src={mapSS.src} alt="map" style={{ width: "100%" }} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Neighborhood;
