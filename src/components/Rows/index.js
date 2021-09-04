import React from "react";
import Square from "../Square";
import "./Rows.css";

export default function Rows({ startGame, rows, handleClickSquare, idRow }) {
  //   console.log(rows);
  return (
    <div className="rows">
      {rows &&
        rows.map((square, idCol) => {
          return (
            <Square
              startGame={startGame}
              key={idCol}
              idCol={idCol}
              idRow={idRow}
              square={square}
              handleClickSquare={handleClickSquare}
            />
          );
        })}
    </div>
  );
}
