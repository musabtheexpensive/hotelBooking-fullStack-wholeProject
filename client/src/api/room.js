import axiosSecure from ".";

// Fetch All Rooms From Db
export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms");
  return data;
};

// Fetch Single Room In Db
export const getRoom = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};
