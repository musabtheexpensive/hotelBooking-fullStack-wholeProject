import axiosSecure from ".";

// Fetch All Rooms From Db
export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms");
  return data;
};

// Fetch All Rooms For Host
export const getHostRooms = async (email) => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  return data;
};

// Fetch Single Room In Db
export const getRoom = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};

// save host add room data api in db
export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/rooms`, roomData);
  return data;
};
