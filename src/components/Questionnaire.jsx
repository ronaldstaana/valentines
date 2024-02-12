import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

const Questionnaire = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "relative",
    left: 0,
    top: 0,
  });

  const [showModal, setShowModal] = useState(false);

  const handleNoButtonHover = () => {
    const randomLeft = Math.random() * (window.innerWidth - 100); 
    const randomTop = Math.random() * (window.innerHeight - 50); 

    setNoButtonStyle({
      position: "absolute",
      left: `${randomLeft}px`,
      top: `${randomTop}px`,
    });
  };

  const handleYesButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">
            Are you my valentine because you are wub or are you wub because you
            are my valentine?
          </h5>
          <div className="mt-4">
            <button
              className="btn btn-success mr-3"
              onClick={handleYesButtonClick}
            >
              Yes
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              onMouseEnter={handleNoButtonHover}
              style={noButtonStyle}
            >
              No
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="gif-container"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <img src="images/gojo-kfc.gif" alt="" className="img-fluid" />
          </div>
        </div>
        <br />
      </div>

      {}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Hooray!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="images/gojo-ron.jpg" alt="" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Questionnaire;
