import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onResetTime }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onResetTime}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>
          the target time was <strong>{targetTime} seconds</strong>
          <p>
            You stopped the timer with{" "}
            <strong>{formattedRemainingTime} seconds left</strong>
          </p>
        </p>
        <form method="dialog" onSubmit={onResetTime}>
          <button type="submit">Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
