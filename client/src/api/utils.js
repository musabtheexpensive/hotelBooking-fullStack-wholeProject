import axios from "axios";
import axiosSecure from ".";

export const imageUpload = async (image) => {
  const formData = new FormData();
  console.log(image);
  formData.append("image", image);
  formData.set("key", import.meta.env.VITE_IMGBB_API_KEY);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload`,
    formData,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );
  return data;
};

// admin stat
export const getAdminStat = async () => {
  const { data } = await axiosSecure(`/admin-stat`);
  return data;
};
