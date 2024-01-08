import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "../Sidebar/MenuItem";
import userRole from "../../../hooks/userRole";
import HostModal from "../../Modal/HostRequestModal";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { becomeHost } from "../../../api/auth";
import toast from "react-hot-toast";
const GuestMenu = () => {
  const [role] = userRole();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = async () => {
    // Request To Be A Host function Start Here
    try {
      const data = await becomeHost(user?.email);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success!, Please Wait For Admin Confirmation");
      } else {
        toast.success("Please!, Wait For Admin Approval👊");
      }
    } catch (err) {
      toast.err(err.message);
    }finally {
      setIsOpen(false);
    }
  };
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />

      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </>
  );
};

export default GuestMenu;
