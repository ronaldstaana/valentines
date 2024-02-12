import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Gallery = ({ images }) => {
  const imageMaxHeight = "500px"; 

  return (
    <>
      <Carousel className="d-md-none"> {}
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: imageMaxHeight, objectFit: "cover" }} 
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel className="d-none d-md-block"> {}
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: imageMaxHeight, objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <br />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2 personal-message text-center">
            <h2 className="mb-3">To my dear wubbiecakes</h2>
            <p>Happy Valentines Day!</p>
            <p>
              Just wanted to say thanks for being a great partner. I've noticed
              changes and adaptations in both of us parang si Mahoraga charot.
              Specifically, you being patient talaga and not yelling at me
              anymore. And for me being less annoying and jealous wahaha. I just
              appreciate how we both compromise; that just shows our love for
              each other. I'm really happy with where we are now and excited for
              more adventures together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
