import React from "react";
import { FaAd } from "react-icons/fa";
import MenuItem from "../Sidebar/MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaAd}
        label="Manage User"
        address="manage-users"
      />
    </>
  );
};

export default AdminMenu;
