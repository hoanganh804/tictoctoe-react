import React from "react";
import "./Square.css";

export default function Square({
  startGame,
  handleClickSquare,
  idRow,
  idCol,
  square,
}) {
  // console.log(startGame);
  return (
    <button
      // disabled={!startGame}
      className="square"
      style={
        square === "X"
          ? { color: "rgb(8, 109, 57)" }
          : { color: "rgb(140, 37, 18)" }
      }
      onClick={() => handleClickSquare(idRow, idCol)}
    >
      {square}
    </button>
  );
}
