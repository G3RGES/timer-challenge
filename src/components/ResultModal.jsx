import React from "react";

const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog>
      <h2>You {result}</h2>
      <p>
        the target time was <strong>{targetTime}</strong>
      </p>
    </dialog>
  );
};

export default ResultModal;
