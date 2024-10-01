import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpire, setTimerExpire] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  const handleStart = () => {
    setTimerStart(true);

    timer.current = setTimeout(() => {
      setTimerExpire(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStart(false);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      {/* {timerExpire && <ResultModal targetTime={targetTime} result="won" />} */}
      <section className="challenge">
        <h2>{title} </h2>

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
    </>
  );
};

export default TimerChallenge;
