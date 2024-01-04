import AxiosInstance from "./AxiosInstance";

const Images = async () => {
  try {
    const response = await AxiosInstance.post("/sticker/draw?userId=1", 1);

    console.log(response.data);

    return response.data.result;
  } catch (error) {}
};

export default Images;
