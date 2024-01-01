import React from "react";
import MenuItem from "./MenuItem";
import { FaAd } from "react-icons/fa";

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
