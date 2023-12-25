/* eslint-disable react/prop-types */
import Calender from "./Calender";
import Button from "../Button/Button";
import { formatDistance, isValid, parseISO } from "date-fns";
import { useState, useEffect } from "react";

const RoomReservation = ({ room }) => {
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "Selection",
  });

  useEffect(() => {
    // Calculate totalDays and totalPrice when startDate or endDate changes
    const calculateTotal = () => {
      // Ensure that startDate and endDate are valid Date objects
      if (isValid(value.startDate) && isValid(value.endDate)) {
        const days = parseInt(
          formatDistance(value.startDate, value.endDate).split(" ")[0]
        );
        setTotalDays(days);
        setTotalPrice(days * room?.price);
      }
    };

    calculateTotal();
  }, [value.startDate, value.endDate, room?.price]);

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value}></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
