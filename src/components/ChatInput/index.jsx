import React, { useState } from "react";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <SmileOutlined />
      <Input
        onChange={(e) => setValue(e.target.value)}
        size="large"
        style={{ width: "80%" }}
        placeholder="Введите текст"
      />
      <CameraOutlined />
      {value ? <SendOutlined /> : <AudioOutlined />}
    </>
  );
};

export default ChatInput;
