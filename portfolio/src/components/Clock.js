import React from "react";
import { useState, useEffect } from "react";

const ClockAPI = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDateState(new Date());
    }, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(intervalID);
  }, []);

  // Function to format hours to 12-hour format
  const formatHours = (hours) => {
    return hours % 12 || 12; // Ensure 12-hour format
  };

  // Function to determine AM or PM
  const getAmPm = (hours) => {
    return hours >= 12 ? "PM" : "AM";
  };


  return (
    <div className="clock">
      <div className="clock-time">
        <p className="time">
          {formatHours(dateState.getHours())}:{dateState.getMinutes().toString().padStart(2, "0")} 
        </p>
        <p className="am-pm">
          {getAmPm(dateState.getHours())}
        </p>
      </div>
      {/* <p className="clock-date">
        {dateState.toLocaleString("en-US", { weekday: "short" })}, {dateState.toLocaleString("en-US", { month: "long"})} {dateState.getDate()}
      </p> */}
    </div>
  );
};

export default ClockAPI;
