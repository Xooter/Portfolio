import moment from "moment";
import React, { useEffect, useState } from "react";

export const Time = () => {
  const [time, setTime] = useState(moment().format("hh:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm A"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Text ">
      {time}
    </a>
  );
};
