import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/messagesSlice";
import { Messages as BaseMessages } from "components";

const Messages = ({ userId }) => {
  const dialogId = useSelector((state) => state.dialogs.currentDialog);
  const items = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages(dialogId));
    console.log("запрос на диалог");
  }, [dialogId]);

  return <BaseMessages items={items} />;
};

export default Messages;
