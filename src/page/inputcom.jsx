import React from "react";
export default function Inputcom({ inp, type, value, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "10vh",
        margin: "1vh",
      }}
    >
      <label htmlFor={inp} style={{ fontSize: "2.3vh", fontWeight: "bold" }}>
        {inp}을 입력하세요
      </label>
      <input
        type={type}
        id={inp}
        style={{
          height: "6vh",
          width: "75vw",
          border: "0.5vh solid red",
          borderRadius: "1vh",
          fontSize: "2.3vh",
          fontWeight: "bold",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.target.style.outline = "none"; // 인풋 필드 선택 시 테두리 색상 제거
        }}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
