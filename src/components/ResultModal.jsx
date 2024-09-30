import React from "react";

const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        the target time was <strong>{targetTime} seconds</strong>
        <p>
          You stopped the timer with <strong>X seconds left</strong>
        </p>
      </p>
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
