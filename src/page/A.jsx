import React, { useEffect } from "react";
import axios from "axios";
import Images from "./api/Images";
function A() {
  const aaa = Images();
  console.log(aaa);
  return <div>{/* Add your UI here */}</div>;
}

export default A;
