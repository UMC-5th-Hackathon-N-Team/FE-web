import React from "react";
function Sticker() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 1vw 0 0",
      }}
    >
      <div style={{ height: "25vh", width: "30vw", background: "red" }}></div>
      <p style={{ margin: "2vw 0vw 6vw 0vw", fontSize: "2vh" }}>피카츄</p>
    </div>
  );
}

export default Sticker;
