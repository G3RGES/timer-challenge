import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
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
});

export default ResultModal;
