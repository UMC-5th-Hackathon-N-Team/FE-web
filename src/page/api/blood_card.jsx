import AxiosInstance from "./AxiosInstance";

const BloodCard = async () => {
  try {
    const response = await AxiosInstance.get("/bloodcard/1");

    console.log(response.data);

    return response.data.result;
  } catch (error) {
    console.error('Error for blood_card:', error);
    throw error;
  }
};

export default BloodCard;
