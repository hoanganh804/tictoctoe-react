import { Button } from "antd";
import React, { useState } from "react";
import "./Login.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { message, Space } from "antd";

const { Option } = Select;
const error = (mess) => {
  message.error(mess);
};

export default function Login() {
  const [inforUser, setInforUser] = useState({
    user1: "",
    user2: "",
  });

  function onChange(value) {
    console.log(`selected ${value}`);
  }

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

        <div className="form_select">
          <Select
            style={{ width: 136 }}
            placeholder="Select"
            optionFilterProp="children"
            onChange={onChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>

          <Select
            style={{ width: 136 }}
            placeholder="Select"
            optionFilterProp="children"
            onChange={onChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
      </div>

      <Button
        onClick={(e) => saveUser(e)}
        shape="round"
        className="button_start"
        href="/tictoctoe-react/tictoctoeapp"
      >
        START
      </Button>
    </div>
  );
}
