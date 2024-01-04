import React, { useState } from "react";
import Inputcom from "./inputcom";
import Check from "./check";
import axios from "axios";

function Inputpage2() {
  const [number, setNum] = useState("");
  const [type, setBleeding] = useState("전혈");
  const [date, setBleedingDate] = useState("");
  const [location, setBloodBankName] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://sophie.p-e.kr/bloodcard/", {
        number,
        type,
        date,
        location,
      });

      console.log(response.data); // 서버에서 받은 응답을 콘솔에 출력합니다. 필요에 따라 변경하실 수 있습니다.
    } catch (error) {
      console.error(
        "There has been a problem with your axios operation:",
        error
      );
    }
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
        inp="증서번호"
        type="number"
        value={number}
        onChange={(e) => setNum(e.target.value)}
      />
      <Check
        inp="현혈종류"
        t1="전혈"
        t2="성분"
        value={type}
        onChange={(e) => setBleeding(e.target.value)}
      />
      <Inputcom
        inp="현혈일자"
        type="date"
        value={date}
        onChange={(e) => setBleedingDate(e.target.value)}
      />
      <Inputcom
        inp="혈액원명"
        type=""
        value={location}
        onChange={(e) => setBloodBankName(e.target.value)}
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

export default Inputpage2;
