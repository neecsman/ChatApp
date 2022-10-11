import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessages } from "../../redux/messagesSlice";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";

import { Input } from "antd";
import classNames from "classnames";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState(false);
  const dispatch = useDispatch();
  const dialogId = useSelector((state) => state.dialogs.currentDialog);
  const userId = useSelector((state) => state.user.user.id);

  const sendMessage = () => {
    const message = {
      text: value,
      userId,
      dialogId,
    };
    dispatch(sendMessages(message));
    setValue("");
  };

  return (
    <>
      <div className={classNames("emoji", { "emoji-open": emoji })}>
        <Picker
          locale={"ru"}
          theme={"light"}
          data={data}
          onEmojiSelect={(e) => setValue(value + e.native)}
        />
      </div>

      <SmileOutlined onClick={() => setEmoji(!emoji)} />
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        onClick={() => setEmoji(false)}
        onChange={(e) => setValue(e.target.value)}
        size="large"
        style={{ width: "80%" }}
        placeholder="Введите текст"
        value={value}
      />
      <CameraOutlined />
      {value ? (
        <SendOutlined onClick={() => sendMessage()} />
      ) : (
        <AudioOutlined />
      )}
    </>
  );
};

export default ChatInput;
