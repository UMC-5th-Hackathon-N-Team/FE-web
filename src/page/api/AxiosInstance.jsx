import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    "http://umc-5th-hackathon-env.eba-qvcasitx.ap-northeast-2.elasticbeanstalk.com",
});

export default AxiosInstance;
