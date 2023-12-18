import React, { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <Container>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {rooms.map((room) => (
          <Card key={room._id} room={room}></Card>
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
