import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

import data from "../public/senecahousedata.json";
const images = data.galleryimages;

function Gallery(props) {
  //   return (
  //     <div className="row">
  //       <div className="col">
  //         <ImageGallery items={images} showNav={false} showBullets showThumbnails/>
  //       </div>
  //     </div>
  //   );
  // }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="bg-primary px-0" id="Gallery">
      <h1 className="text-secondary text-center py-3">Gallery</h1>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[0].original}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[1].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[2].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[3].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[4].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[5].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[6].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[7].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[8].original}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images[9].original}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

// render(<ControlledCarousel />);
export default Gallery;
