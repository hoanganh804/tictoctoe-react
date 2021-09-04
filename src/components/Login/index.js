import React, { useState } from "react";
import "./Login.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Link } from "react-router-dom";

const error = (mess) => {
  message.error(mess);
};

export default function Login() {
  const [inforUser, setInforUser] = useState({
    user1: "",
    user2: "",
  });

  const [configGame, setConfigGame] = useState({
    size: 10,
    win: 5,
  });

  const saveUser = (e) => {
    if (inforUser.user1 === "" && inforUser.user2 !== "") {
      e.preventDefault();
      error(`Please fill User 1`);
    }
    if (inforUser.user1 !== "" && inforUser.user2 === "") {
      e.preventDefault();
      error(`Please fill User 2`);
    }
    if (inforUser.user1 === "" && inforUser.user2 === "") {
      e.preventDefault();
      error(`Please fill User 1 and User 2`);
    }
    if (configGame.size >= 12 || configGame.size < 3) {
      e.preventDefault();
      error(`Please fill size < 12 and > 2`);
    }
    if (configGame.win > 6 || configGame.win < 3) {
      e.preventDefault();
      error(`Please fill condition < 7 and > 2`);
    }
    localStorage.setItem("config", JSON.stringify(configGame));
    localStorage.setItem("user-tictoctoe", JSON.stringify(inforUser));
  };

  const onChaneUser1 = (value) => {
    const user1 = value.target.value;
    setInforUser({ user2: inforUser.user2, user1: user1 });
  };
  const onChaneUser2 = (value) => {
    const user2 = value.target.value;
    setInforUser({ user1: inforUser.user1, user2: user2 });
  };
  const onChaneUser3 = (value) => {
    const size = parseInt(value.target.value);
    setConfigGame({
      size: size,
      win: configGame.win,
    });
  };
  const onChaneUser4 = (value) => {
    const win = parseInt(value.target.value);
    setConfigGame({
      size: configGame.size,
      win: win,
    });
  };

  return (
    <div className="form_login">
      <h1>My Tictoctoe</h1>
      <div className="form_choice">
        <Input
          onChange={onChaneUser1}
          value={inforUser.user1}
          className="input_user"
          size="large"
          placeholder="Input User 1"
          prefix={<UserOutlined />}
          rules={[{ required: true, message: "Please input your username!" }]}
        />
        <Input
          onChange={onChaneUser2}
          value={inforUser.user2}
          className="input_user"
          size="large"
          placeholder="Input User 2"
          prefix={<UserOutlined />}
        />
        <Input
          onChange={onChaneUser3}
          // value={configGame.size}
          className="input_user"
          size="large"
          placeholder="Input size of game ... ex: 10 (10x10)"
        />
        <Input
          onChange={onChaneUser4}
          // value={configGame.win}
          className="input_user"
          size="large"
          placeholder="Input condition win ... ex: 5 (5 O to win)"
        />
      </div>

      <Link
        to="/tictoctoe-react/tictoctoeapp"
        onClick={(e) => saveUser(e)}
        shape="round"
        className="button_start"
      >
        START
      </Link>
    </div>
  );
}
