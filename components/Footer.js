import React from "react";
import { Container } from "react-bootstrap";
import FooterLogos from "./FooterLogos";

function Footer(props) {
  return (
    <footer>
      <Container>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <p style={{ fontSize: ".75rem" }}>
              <em>
                Urban Pace has implemented safety plans and precautions to keep
                our team and clients safe during the COVID-19 pandemic. Prices,
                terms and features are subject to change without notice. We are
                pledged to the letter and spirit of US policy for the
                achievement of equal housing opportunity throughout the nation.
              </em>
            </p>
          </div>
         
          <div className="col-md-6 col-12 order-1 order-md-2">
            <FooterLogos />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
