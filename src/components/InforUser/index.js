import React, { useState, useEffect } from "react";
import "./InforUser.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function InforUser({
  onClickReset,
  statusSquare,
  handleTimeOut,
  startGame,
}) {
  const [timer, setTimer] = useState(60);
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user-tictoctoe");
    const newUser = JSON.parse(user);
    if (user) {
      setUser(newUser);
    }
  }, []);

  useEffect(() => {
    let idTimer = null;
    if (startGame) {
      setTimer(60);
      idTimer = setInterval(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
    } else {
      setTimer(60);
    }

    return () => clearInterval(idTimer);
  }, [statusSquare, startGame]);

  useEffect(() => {
    if (timer < 0) {
      handleTimeOut(statusSquare);
    }
  }, [timer, statusSquare, handleTimeOut]);

  return (
    <>
      <div className="form_user">
        <div className="user user1">{user.user1}</div>

        <div
          className="user_status"
          style={
            statusSquare === 1
              ? { color: "rgb(152, 1, 147)" }
              : { color: "rgb(201, 201, 201)" }
          }
        >
          X
        </div>
      </div>
      <div className="form_control">
        <span className="time">{timer}</span>
        <Button onClick={onClickReset} className="button_reset" ghost>
          Reset
        </Button>
        <Link to="/tictoctoe-react/" className="button_exit">
          Exit
        </Link>
      </div>
      <div className="form_user">
        <div className="user user2">{user.user2}</div>

        <div
          className="user_status"
          style={
            statusSquare === 2
              ? { color: "rgb(152, 1, 147)" }
              : { color: "rgb(201, 201, 201)" }
          }
        >
          O
        </div>
      </div>
    </>
  );
}
