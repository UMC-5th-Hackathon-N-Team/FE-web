import React from "react";
import Sticker from "./Stiker";
function Stickerpage() {
  return (
    <div style={{ boxSizing: "border-box", padding: "3vw", width: "100vw" }}>
      <div style={{ height: "5vh" }}></div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          borderTop: "1vh solid black",
          borderBottom: "1vh solid black",
          height: "15vh",
          marginBottom: "5vh",
        }}
      >
        <p style={{ fontSize: "5vh", margin: "0px" }}>레전더리</p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Sticker /> <Sticker />
        <Sticker />
        <Sticker />
      </div>
    </div>
  );
}

export default Stickerpage;
