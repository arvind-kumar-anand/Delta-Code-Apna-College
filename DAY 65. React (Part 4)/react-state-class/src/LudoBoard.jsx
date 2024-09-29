import { useState } from "react";

export default function App() {
  let [moves, setMoves] = useState({ Blue: 0, Yellow: 0, Green: 0, Red: 0 });

  let updateBlue = () => {
    // moves.Blue += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, Blue: prevMoves.Blue + 1 };
    });
  };
  let updateYellow = () => {
    // moves.Blue += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, Yellow: prevMoves.Yellow + 1 };
    });
  };
  let updateGreen = () => {
    // moves.Blue += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, Green: prevMoves.Green + 1 };
    });
  };
  let updateRed = () => {
    // moves.Blue += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, Red: prevMoves.Red + 1 };
    });
  };

  return (
    <div>
      <h1>Game Begins!</h1>
      <div>
        <p>Blue Moves = {moves.Blue} </p>
        <button style={{ backgroundColor: "Blue" }} onClick={updateBlue}>
          +1
        </button>

        <p>Yellow Moves = {moves.Yellow} </p>
        <button
          style={{ backgroundColor: "Yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>

        <p>Green Moves = {moves.Green} </p>
        <button style={{ backgroundColor: "Green" }} onClick={updateGreen}>
          +1
        </button>

        <p>Red Moves = {moves.Red} </p>
        <button style={{ backgroundColor: "Red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
