import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(3600);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);
  var i=Math.round(time/60);

  return (<div>{i}:{time-(i*60)} seconds left</div>);
};

export default Timer;
