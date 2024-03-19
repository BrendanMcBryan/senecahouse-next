import React from "react";
import { Container } from "react-bootstrap";

import FeaturesTabs from "./FeaturesTabs";

function Features(props) {
  return (
    <div id="Features" className="bg-primary py-md-5">
      <Container>
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-md-5 my-md-5">
            <h1 className="text-secondary mb-5">
              Residence <br />
              Features
            </h1>
            <p className="text-white">
              Seneca House, yet another sophisticated creation from developer PT
              Blooms, is a collection of lifestyle homes comprised of
              high-quality finishes, contemporary layouts (often including both
              workspace and outdoor space), all outfitted with modern
              sensibilities and ideally nestled in a beautiful boutique
              building. Perfectly positioned for those who want to be centered
              in the center of it all.
            </p>
          </div>
          <div className="col-12 col-md-6 my-md-5">
            <FeaturesTabs />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Features;
