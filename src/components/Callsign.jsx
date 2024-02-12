import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CallsignComponent = ({ onSubmission }) => {
  const [callsign, setCallsign] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [imageSource, setImageSource] = useState("/images/gojo-purple.jpg"); 

  const handleInputChange = (e) => {
    setCallsign(e.target.value);
    setShowImage(false);
  };

  const handleSubmit = () => {
    if (callsign.toLowerCase() === "wub") {
      setImageSource("/images/gojo-love.jpg");
      onSubmission(true); 
    } else {
      setImageSource("/images/gojo-purple.jpg");
      onSubmission(false); 
    }
    setShowImage(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="mb-4">
            To verify you are Jami. Kindly enter our callsign below.
          </h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="callsign"
              value={callsign}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>

          {showImage && (
            <div className="mt-4">
              <img src={imageSource} className="img-fluid" alt="Error" />
              {callsign.toLowerCase() === "wub" && <h1>Welcome wub! </h1>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallsignComponent;
