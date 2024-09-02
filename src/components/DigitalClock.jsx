import { useEffect, useState } from "react";
import TodayDate from "./Date";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervelId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervelId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridien = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}  ${meridien}`;
  } 

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <span>
        <TodayDate />
      </span>
      <div className="time">
        <span className="timeDisplay">{formatTime()}</span>
        <span className="timeReflection">{formatTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
