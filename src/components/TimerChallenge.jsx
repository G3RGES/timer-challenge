import React, { useState, useRef } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpire, setTimerExpire] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const timer = useRef();

  const handleStart = () => {
    setTimerStart(true);

    timer.current.setTimeout(() => {
      setTimerExpire(true);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStart(false);
  };

  return (
    <section className="challenge">
      <h2>{title} </h2>
      {timerExpire && <p>Timer Expired, You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStart ? "active" : ""}>
        {timerStart ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
