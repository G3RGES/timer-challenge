import { useState, useRef } from "react";

export default function Player() {
  const [playerUsername, setPlayerUsername] = useState("");

  const playerName = useRef();

  // console.log(playerName);//* TESTIG

  const handleClick = (event) => {
    // if (playerUsername.length > 0) {
    //   setSubmitted(true);
    // }
    setPlayerUsername(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerUsername ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" id="playerName" name="playerName" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
