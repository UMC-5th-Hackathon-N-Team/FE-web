import AxiosInstance from "./AxiosInstance";

const MeritApi = async () => {
  try {
    const response = await AxiosInstance.get("/count/merit");

    console.log(response.data);

    return response.data.result.count; //정확한 숫자를 출력하기
  } catch (error) {
    console.error('Error for mypage:', error);
    throw error;
  }
};

export default MeritApi;
