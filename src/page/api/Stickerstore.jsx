import AxiosInstance from "./AxiosInstance";

const Stickerstore = async () => {
  try {
    const response = await AxiosInstance.get("/sticker/board/1");

    console.log(response.data);

    return response.data.result.imageInfoList;
  } catch (error) {}
};

export default Stickerstore;
