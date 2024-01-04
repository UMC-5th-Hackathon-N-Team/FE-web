import React, { useState } from "react";
import logo from "./giftimg.png";
import "./Firework.css";
import Images from "./api/Images";
import { Link } from "react-router-dom";

function Gift() {
  const [url, setUrl] = useState(logo);
  const [name, setName] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleClick = () => {
    Images()
      .then((result) => {
        setUrl(result.imageUrl);
        setName(result.name);
        setTimeout(() => {
          setIsButtonVisible(false);
        }, 500);
      })
      .catch((error) => {
        console.error(error);
      });
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
          src={url}
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
          <div>
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
              <p style={{ margin: "0", fontSize: "2.5vh", fontWeight: "bold" }}>
                {name}
              </p>
            </div>
            <div
              className="pyro"
              style={{
                position: "fixed",
                top: 0,
                left: "-20vw",
                right: 0,
                bottom: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="before"></div>
              <div className="after"></div>
            </div>
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

      {isButtonVisible ? (
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
            fontWeight: "bold",
          }}
          onTouchStart={handleMouseDown} // 변경된 부분
          onTouchEnd={handleMouseUp} // 변경된 부분
          onTouchCancel={handleMouseUp} // 변경된 부분
          onClick={handleClick}
        >
          OPEN
        </button>
      ) : (
        <Link to="/stickerpage">
          {" "}
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
              fontWeight: "bold",
            }}
            onTouchStart={handleMouseDown} // 변경된 부분
            onTouchEnd={handleMouseUp} // 변경된 부분
            onTouchCancel={handleMouseUp} // 변경된 부분
          >
            도감 보러가기
          </button>
        </Link>
      )}
    </div>
  );
}

export default Gift;
