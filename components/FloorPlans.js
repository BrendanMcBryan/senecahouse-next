import Link from "next/link";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "../public/senecahousedata.json";
const floorData = data.floorplans;
const firstfloorData = floorData.filter(
  (obj) => obj.category === "One Bedrooms"
);

const filterStyles = {
  cursor: "pointer",
};

function FloorPlans(props) {
  const [filteredPlans, setFilteredPlans] = useState(firstfloorData);
  const [currentFilter, setCurrentFilter] = useState("One Bedrooms");

  const filters = ["One Bedrooms", "One Bedrooms + Den", "Penthouse"];

  const renderfilters = filters.map((item, index) => {
    {
      if (item === currentFilter)
        return (
          <div
            key={index}
            className="col-auto px-5"
            onClick={() => handleFilterPlans(item)}
          >
            <h5 style={filterStyles} className="filter text-secondary fw-bold">
              {item}
            </h5>
          </div>
        );
      else
        return (
          <div
            key={index}
            className="col-auto px-5"
            onClick={() => handleFilterPlans(item)}
          >
            <h5 style={filterStyles} className="filter text-primary">
              {item}
            </h5>
          </div>
        );
    }
  });

  const renderresidences = filteredPlans.map((item, index) => {
    return (
      <div key={index} className="col-6 d-flex flex-column my-5">
        <div
          className="w-100 mb-5"
          style={{
            backgroundImage: `url("${item.image}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "400px",
          }}
        ></div>

        <div className="mx-auto">
          <a href={item.pdf} target="_blank" rel="noreferrer">
            <Button
              variant="outline-secondary"
              className="rounded-pill px-3 fs-6 fw-bold"
              size="sm"
            >
              View Floor Plan
            </Button>
          </a>
        </div>
      </div>
    );
  });

  const handleFilterPlans = (filterText) => {
    event.preventDefault();
    console.log("hell0");
    const result = floorData.filter((obj) => obj.category === filterText);
    setCurrentFilter(filterText);
    setFilteredPlans(result);
  };

  return (
    <div id="Floorplans" className="py-md-5">
      <Container>
        <div className="row">
          <div className="col">
            <h1 className="text-secondary text-center">Floor Plans</h1>
          </div>
        </div>
        <div className="row justify-content-center py-4">{renderfilters}</div>
        <div className="row justify-content-center py-4 w-75 mx-auto">
          {renderresidences}
        </div>
      </Container>
    </div>
  );
}

export default FloorPlans;
