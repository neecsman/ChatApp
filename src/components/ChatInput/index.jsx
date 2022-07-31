import React, { useState, useEffect, useRef } from "react";
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
        value={value}
      />
      <CameraOutlined />
      {value ? <SendOutlined /> : <AudioOutlined />}
    </>
  );
};

export default ChatInput;
