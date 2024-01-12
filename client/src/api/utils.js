import axios from "axios";
import axiosSecure from ".";

// chatGpt 1

// export const imageUpload = async (image) => {
//   try {
//     const formData = new FormData();
//     formData.append("image", image);

//     const { data } = await axios.post(
//       `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );

//     return data;
//   } catch (error) {
//     console.error("Image upload error:", error);
//     throw error; // Rethrow the error for further handling, or handle it appropriately here
//   }
// };

// chatGpt 2

// export const imageUpload = async (image) => {
//   const formData = new FormData();
//   formData.append("image", image);

//   try {
//     const { data } = await axios.post(
//       `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
//       formData
//     );
    
//     return data;
//   } catch (error) {
//     // Handle the error appropriately, e.g., log it or throw a custom error
//     console.error("Image upload failed:", error);
//     throw error;
//   }
// };

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data;
};

// support session

// export const imageUpload = async (image) => {
//   const formData = new FormData();
//   console.log(image);
//   formData.append("image", image);
//   formData.set("key", import.meta.env.VITE_IMGBB_API_KEY);

//   const { data } = await axios.post(
//     `https://api.imgbb.com/1/upload`,
//     formData,
//     {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     }
//   );
//   return data;
// };

// admin stat
export const getAdminStat = async () => {
  const { data } = await axiosSecure(`/admin-stat`)
  return data
}
