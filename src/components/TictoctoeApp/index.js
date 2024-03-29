import React, { useState, useEffect } from "react";
import InforUser from "../InforUser";
import Rows from "../Rows";
import "./TictoctoeApp.css";
import { message } from "antd";

export default function TictoctoeApp() {
  const [dataRows, setDataRows] = useState([]);
  const [statusSquare, setStatusSquare] = useState(1);
  const [winer, setWiner] = useState(0);
  const [clearData, setClearData] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [configGame, setConfigGame] = useState({
    size: 0,
    win: 0,
  });

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem("config"));
    if (config) {
      setConfigGame({
        size: config.size,
        win: config.win,
      });
    }
  }, []);

  useEffect(() => {
    if (clearData) {
      const row = [];
      for (let i = 0; i < configGame.size; i++) {
        row.push(null);
      }
      const allRows = [];
      for (let i = 0; i < configGame.size; i++) {
        allRows.push([...row]);
      }
      setDataRows(allRows);
      setClearData(false);
    }
    const row = [];
    for (let i = 0; i < configGame.size; i++) {
      row.push(null);
    }
    const allRows = [];
    for (let i = 0; i < configGame.size; i++) {
      allRows.push([...row]);
    }
    setDataRows(allRows);
  }, [clearData, configGame.size]);

  useEffect(() => {
    let idTOClear = null;
    if (winer === 1) {
      const messWin = `reset game after 2s`;
      success(messWin, 2);
      idTOClear = setTimeout(() => {
        setClearData(true);
      }, 2000);
    }
    if (winer && winer !== 1) {
      const messWin = `${winer} win, reset game after 5s`;
      success(messWin, 4.5);
      idTOClear = setTimeout(() => {
        setClearData(true);
      }, 5000);
    }
    return () => {
      clearTimeout(idTOClear);
    };
  }, [winer]);

  const success = (messWin, duration) => {
    message.loading(messWin, duration).then(() => message.info("Done!", 1.5));
  };

  const handleClickSquare = (idRow, idCol) => {
    const newDataRows = [...dataRows];
    let dataSquare = newDataRows[idRow][idCol];

    if (!dataSquare) {
      setStartGame(true);
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
    for (let i = 0; i < configGame.size; i++) {
      for (let j = i; j < i + configGame.win; j++) {
        if (scoreCheck < configGame.win) {
          if (arrCheck[j] === arrCheck[j + 1] - 1) {
            scoreCheck = scoreCheck + 1;
          } else {
            scoreCheck = 0;
          }
        }
      }
    }

    if (scoreCheck === configGame.win) {
      setWiner(str);
      setStartGame(false);
    }
  };

  const onClickReset = () => {
    setWiner(1);
    setStartGame(false);
  };

  const handleTimeOut = (statusSquareLose) => {
    setWiner(statusSquare === 1 ? "O" : "X");
    setStartGame(false);
  };

  return (
    <>
      <div className="main_user">
        <InforUser
          handleTimeOut={handleTimeOut}
          statusSquare={statusSquare}
          onClickReset={onClickReset}
          startGame={startGame}
        />
      </div>
      <div className="main_app">
        {dataRows.map((rows, idRow) => {
          return (
            <Rows
              key={idRow}
              idRow={idRow}
              rows={rows}
              handleClickSquare={handleClickSquare}
              startGame={startGame}
            />
          );
        })}
      </div>
    </>
  );
}
