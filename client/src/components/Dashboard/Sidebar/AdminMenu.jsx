import React from "react";
import MenuItem from "./MenuItem";
import { BsFillPauseCircleFill } from "react-icons/bs";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillPauseCircleFill}
        label="Manage User"
        address="manage-user"
      />
    </>
  );
};

export default AdminMenu;
