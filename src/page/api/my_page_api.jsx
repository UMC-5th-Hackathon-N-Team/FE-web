import AxiosInstance from "./AxiosInstance";

const MyPageApi = async () => {
  try {
    const response = await AxiosInstance.get("/MyPage/1");

    console.log(response.data);

    return response.data.result;
  } catch (error) {
    console.error('Error for mypage:', error);
    throw error;
  }
};

export default MyPageApi;
