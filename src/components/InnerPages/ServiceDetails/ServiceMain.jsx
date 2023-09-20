import React, { useState } from "react";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";

const ServiceMain = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div>
      <div
        className="button-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <button
          className={`butn butn-md butn-bord radius-30 ${
            activeButton === 0 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(0)}
        >
          Web Development
        </button>
        <button
          className={`butn butn-md butn-bord radius-30 ${
            activeButton === 1 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Web Application
        </button>
        <button
          className={`butn butn-md butn-bord radius-30 ${
            activeButton === 2 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Mobile Apps
        </button>
        <button
          className={`butn butn-md butn-bord radius-30 ${
            activeButton === 3 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Digital Marketing
        </button>
        <button
          className={`butn butn-md butn-bord radius-30 ${
            activeButton === 4 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Video & Animations
        </button>
        <button
          className={`butn butn-md butn-bord radius-30 ${
            activeButton === 5 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Graphic Design
        </button>
      </div>
      <div className="content-container">
        {activeButton === 0 && (
          <div>
            <Service1></Service1>
          </div>
        )}
        {activeButton === 1 && (
          <div>
            <Service2></Service2>
          </div>
        )}
        {activeButton === 2 && (
          <div>
            <Service3></Service3>
          </div>
        )}
        {activeButton === 3 && (
          <div>
            <Service4></Service4>
          </div>
        )}
        {activeButton === 4 && (
          <div>
            <Service5></Service5>
          </div>
        )}
        {activeButton === 5 && (
          <div>
            <Service6></Service6>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceMain;
