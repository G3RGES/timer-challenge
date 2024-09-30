import React, { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpire, setTimerExpire] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const handleStart = () => {
    setTimerStart(true);

    setTimeout(() => {
      setTimerExpire(true);
    }, targetTime * 1000);
  };

  return (
    <section className="challenge">
      <h2>{title} </h2>
      {timerExpire && <p>Timer Expired, You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
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
