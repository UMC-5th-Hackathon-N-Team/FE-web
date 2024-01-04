import React, { useState } from "react";
import logo from "./giftimg.png";
import "./Firework.css";

function Gift() {
  const [isClicked, setIsClicked] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsButtonVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ height: "12vh" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "70vw",
            width: "70vw",
            maxWidth: "500px",
            maxHeight: "500px",
            border: "0.1vh solid black",
            borderRadius: "1vh",
          }}
        />
        {!isButtonVisible ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "3vh 0 3vh 0",
              height: "5vh",
              width: "70vw",
              maxWidth: "500px",
              boxSizing: "border-box",
              borderTop: "0.1vh solid black",
              borderBottom: "0.1vh solid black",
            }}
          >
            <p style={{ margin: "0", fontSize: "2.5vh" }}>피카츄</p>
          </div>
        ) : (
          <div
            style={{
              margin: "3vh 0 3vh 0",

              height: "5vh",
              width: "70vw",
              maxWidth: "500px",
            }}
          />
        )}
      </div>
      {isButtonVisible && (
        <button
          style={{
            transform: isClicked ? "scale(0.95)" : "scale(1)",
            width: "70vw",
            height: "5vh",
            maxWidth: "500px",
            fontSize: "2.5vh",
            borderRadius: "0.5vh",
            boxSizing: "border-box",
            background: "red",
            color: "white",
            border: "0.1vh solid black",
            borderBottom: "0.3vh solid black",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleClick}
        >
          open
        </button>
      )}
    </div>
  );
}

export default Gift;
