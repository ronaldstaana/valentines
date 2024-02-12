import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CustomProgressBar.css";

const CustomProgressBar = ({ progress, onProgressChange }) => {
  const handleNextClick = () => {
    if (progress < 100) {
      onProgressChange(progress + 20);
    }
  };

  const handleBackClick = () => {
    if (progress > 20) {
      onProgressChange(progress - 20);
    }
  };

  return (
    <div>
      <ProgressBar now={progress} className="custom-progress-bar" />
      {progress === 20 ? (
        <button
          className="btn btn-primary btn-progress m-2"
          onClick={handleNextClick}
        >
          {"Next"}
        </button>
      ) : (
        <>
          <button
            className="btn btn-primary btn-progress m-2"
            onClick={handleBackClick}
          >
            {"Back"}
          </button>
          {progress === 100 ? (
            <></>
          ) : (
            <button
              className="btn btn-primary btn-progress m-2"
              onClick={handleNextClick}
            >
              {"Next"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CustomProgressBar;
