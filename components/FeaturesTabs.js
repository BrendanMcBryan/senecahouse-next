import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import parse from "html-react-parser";

const filterStyles = {
  cursor: "pointer",
};
export default function FeaturesTabs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Kitchen", "Living", "Bath"];
  const highlights = [
    `<p class="mb-5">Bosch Appliances</p>
  <p class="mb-5">Matte Black Fixtures</p>
  <p class="mb-5">Custom Soft Close Cabinetry</p>
  <p class="mb-5">Carrera Style Quartz Backsplash</p>
  <p class="mb-5">Carrera Style Quartz Countertops</p>
  <p class="mb-5">2’x6’ Skylight*</p>
  <p class="mb-5">
    <small><em>* In Penthouse</em></small>
  </p>`,
    `<p class="mb-5">Sink Appliances</p>
  <p class="mb-5">Matte Black Fixtures</p>
  <p class="mb-5">Custra Style Quartz Backsplash</p>
  <p class="mb-5">Carrera Style Quartz Countertops</p>
  <p class="mb-5">2’x6’ Skylight*</p>
  <p class="mb-5">
    <small><em>* In Penthouse</em></small>
  </p>`,
    `<p class="mb-5">Lorem Ip</p>
  <p class="mb-5">Carrera Style Quartz Backsplash</p>
  <p class="mb-5">Carrera Style Quartz Countertops</p>
  <p class="mb-5">2’x6’ Skylight*</p>
  <p class="mb-5">
    <small><em>* In Penthouse</em></small>
  </p>`,
  ];

  const renderTitles = titles.map((item, index) => {
    {
      if (index === currentIndex)
        return (
          <div
            key={index}
            className="col-auto pe-5 "
            onClick={() => handleTabClick(index)}
          >
            <h6
              style={filterStyles}
              className="filter text-secondary fw-bold text-start"
            >
              <strong>
                <u>{item}</u>
              </strong>
            </h6>
          </div>
        );
      else
        return (
          <div
            key={index}
            className="col-auto pe-5"
            onClick={() => handleTabClick(index)}
          >
            <h6 style={filterStyles} className="filter text-secondary">
              {item}
            </h6>
          </div>
        );
    }
  });

  const renderHighlight = (
    <ul className="list-unstyled text-white">
      {parse(highlights[currentIndex])}
    </ul>
  );

  const handleTabClick = (filter) => {
    event.preventDefault();

    setCurrentIndex(filter);
  };

  return (
    <>
      <div className="row justify-content-start my-4">{renderTitles}</div>
      <div className="row">
        <div className="col-auto pe-0">{renderHighlight}</div>
      </div>
    </>
  );
}
