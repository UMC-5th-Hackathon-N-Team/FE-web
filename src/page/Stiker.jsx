import React from "react";
function Sticker() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ height: "25vw", width: "30vw", background: "red" }}></div>
      <p style={{ margin: "2vw 0vw 6vw 0vw" }}>피카츄</p>
    </div>
  );
}

export default Sticker;
