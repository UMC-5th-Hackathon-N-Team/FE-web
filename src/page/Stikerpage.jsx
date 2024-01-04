import React, { useEffect, useState } from "react";
import Sticker from "./Stiker";
import Stickerstore from "./api/Stickerstore";

function Stickerpage() {
  const [array, setArray] = useState(null);

  useEffect(() => {
    Stickerstore()
      .then((result) => {
        setArray(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (array === null) {
    // 데이터가 아직 로드되지 않은 경우
    return <div>Loading...</div>;
  }

  return (
    <div style={{ boxSizing: "border-box", width: "100vw" }}>
      <div style={{ height: "5vh" }}></div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {array.slice(0, 10).map((item, index) => {
          return <Sticker key={index} url={item.url} name={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Stickerpage;
