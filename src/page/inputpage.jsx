import React, { useState } from "react";
import Inputcom from "./inputcom";
import Check from "./check";
import axios from "axios";

function Inputpage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남성");
  const [birthday, setBirthday] = useState("");
  const [bloodType, setBloodType] = useState("a");
  const [donationCount, setDonationCount] = useState("");

  const handleSubmit = async () => {
    console.log({
      name,
      gender,
      birthday,
      bloodType,
      donationCount,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Inputcom
        inp="이름"
        type=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Check
        inp="성별"
        t1="남성"
        t2="여성"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <Inputcom
        inp="생년월일"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "10vh",
          margin: "1vh",
        }}
      >
        <label
          htmlFor="혈액형"
          style={{ fontSize: "2.3vh", fontWeight: "bold" }}
        >
          혈액형을 입력하세요
        </label>

        <select
          id="혈액형"
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
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="ab">AB</option>
          <option value="o">O</option>
        </select>
      </div>
      <Inputcom
        inp="기부 횟수"
        type="number"
        value={donationCount}
        onChange={(e) => setDonationCount(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        style={{
          width: "30vw",
          height: "5vh",
          maxWidth: "500px",
          fontSize: "2vh",
          borderRadius: "0.5vh",
          boxSizing: "border-box",
          background: "red",
          color: "white",
          border: "0.1vh solid black",
          fontWeight: "bold",
          margin: "1vh",
        }}
      >
        확인
      </button>
    </div>
  );
}

export default Inputpage;
