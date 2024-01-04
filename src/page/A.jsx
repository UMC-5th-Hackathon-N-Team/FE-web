import React, { useEffect } from "react";
import axios from "axios";
import Images from "./api/Images";
import Stickerstore from "./api/Stickerstore";

function A() {
  useEffect(() => {
    Stickerstore()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // 빈 의존성 배열을 넘겨주어 이 훅이 한 번만 실행되도록 합니다.

  return <div>{/* Add your UI here */}</div>;
}

export default A;
