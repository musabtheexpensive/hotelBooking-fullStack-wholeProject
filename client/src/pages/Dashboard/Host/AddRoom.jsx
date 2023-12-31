import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";


const AddRoom = () => {
  const { user } = useAuth();
  // const [loading, setLoading] = useState(false);
  // const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    const image_url = await imageUpload(image);
    const roomData = {
      location,
      category,
      title,
      to,
      from,
      price,
      guests,
      bathrooms,
      bedrooms,
      host,
      description,
      image: image_url?.data?.display_url,
    };
    console.table(roomData);
  };
  //   Handle Date Change From React-date-range calender
  const handleDates = (ranges) => {
    setDates(ranges.selection);
    console.log(ranges);
  };

  //   Handle Image Button Text
  // const handleImageChange = (image) => {
  //   setUploadButtonText(image.name);
  // };

  return (
    <div>
      <Helmet>
        <title>Add Room || Dashboard </title>
      </Helmet>
      {/* {Form} */}
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        // handleImageChange={handleImageChange}
        // loading={loading}
        // uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddRoom;
