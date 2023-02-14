import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(3600); // initial time in seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      {minutes}:{seconds < 10 ? "0" : ""}{seconds}Remaining Time
    </div>
  );
}
export default Timer