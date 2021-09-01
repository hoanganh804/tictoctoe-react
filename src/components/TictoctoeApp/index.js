import React, { useState, useEffect } from "react";
import Rows from "../Rows";

export default function TictoctoeApp() {
  const [dataRows, setDataRows] = useState([]);
  const [statusSquare, setStatusSquare] = useState(1);
  const [winer, setWiner] = useState(0);
  const [clearData, setClearData] = useState(true);

  useEffect(() => {
    if (clearData) {
      const row = [null, null, null, null, null, null, null, null, null, null];
      const allRows = [
        [...row],
        [...row],
        [...row],
        [...row],
        [...row],
        [...row],
        [...row],
        [...row],
        [...row],
        [...row],
      ];
      setDataRows(allRows);
      setClearData(false);
    }
  }, [clearData]);

  useEffect(() => {
    if (winer) {
      alert(`${winer} thang cuoc`);
      setClearData(true);
    }
  }, [winer]);

  const handleClickSquare = (idRow, idCol) => {
    const newDataRows = [...dataRows];
    let dataSquare = newDataRows[idRow][idCol];

    if (!dataSquare) {
      if (statusSquare === 1) {
        newDataRows[idRow][idCol] = "X";
        setStatusSquare(2);
        checkWin(idRow, idCol);
      } else {
        newDataRows[idRow][idCol] = "O";
        setStatusSquare(1);
        checkWin(idRow, idCol);
      }
    } else {
      return;
    }
    setDataRows(newDataRows);
  };

  const checkWin = (idRow, idCol) => {
    setWiner(0);
    const checkRow = dataRows[idRow];
    const checkCol = dataRows.map((rows) => {
      return rows[idCol];
    });

    function cal1(rows, index) {
      if (index === idRow) return rows[idCol];
      if (index < idRow) return rows[index + idCol - idRow];
      if (index > idRow) return rows[index + idCol - idRow];
    }

    function cal2(rows, index) {
      if (index === idRow) return rows[idCol];
      if (index < idRow) return rows[idCol + idRow - index];
      if (index > idRow) return rows[idCol + idRow - index];
    }

    const cheo1 = dataRows.map((rows, index) => {
      return cal1(rows, index);
    });

    const cheo2 = dataRows.map((rows, index) => {
      return cal2(rows, index);
    });

    checkWinX(checkRow);
    checkWinX(checkCol);
    checkWinX(cheo1);
    checkWinX(cheo2);
    checkWinO(checkRow);
    checkWinO(checkCol);
    checkWinO(cheo1);
    checkWinO(cheo2);
  };

  const checkWinX = (arrCheck) => {
    const indexX = arrCheck.map((square, index) => {
      return square === "X" ? index : null;
    });
    logicCheck(indexX, "X");
  };

  const checkWinO = (arrCheck) => {
    const indexX = arrCheck.map((square, index) => {
      return square === "O" ? index : null;
    });
    logicCheck(indexX, "O");
  };

  const logicCheck = (arrCheck, str) => {
    let scoreCheck = 1;
    for (let i = 0; i < 10; i++) {
      for (let j = i; j < i + 5; j++) {
        if (scoreCheck < 5) {
          if (arrCheck[j] === arrCheck[j + 1] - 1) {
            scoreCheck = scoreCheck + 1;
          } else {
            scoreCheck = 0;
          }
        }
      }
    }
    if (scoreCheck === 5) {
      setWiner(str);
    }
  };

  return (
    <div>
      <h1>hello</h1>
      {dataRows.map((rows, idRow) => {
        return (
          <Rows
            key={idRow}
            idRow={idRow}
            rows={rows}
            handleClickSquare={handleClickSquare}
          />
        );
      })}
    </div>
  );
}
