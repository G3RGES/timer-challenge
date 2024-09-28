import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // console.log(playerName);//* TESTIG

  const handleNameChange = (event) => {
    setSubmitted(false);
    setPlayerName(event.target.value);
  };

  const handleClick = () => {
    if (playerName.length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleNameChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
