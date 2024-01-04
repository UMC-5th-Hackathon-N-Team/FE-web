import React from "react";
function Sticker({ url, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 0 0 2.5vw",
      }}
    >
      <img
        src={url}
        alt="Logo"
        style={{ height: "30vw", width: "30vw", borderRadius: "1vh" }}
      />
      <p
        style={{
          margin: "2vw 0vw 6vw 0vw",
          fontSize: "2vh",
          borderTop: "0.1vh solid black",
          width: "30vw",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default Sticker;
