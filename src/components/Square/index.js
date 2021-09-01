import React from "react";
import "./Square.css";

export default function Square({ handleClickSquare, idRow, idCol, square }) {
  return (
    <button className="square" onClick={() => handleClickSquare(idRow, idCol)}>
      {square}
    </button>
  );
}
