import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/messagesSlice";
import { Messages as BaseMessages } from "components";

const Messages = ({ userId }) => {
  const dialogId = useSelector((state) => state.dialogs.currentDialog);
  const { messages, isLoading } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (dialogId) {
      dispatch(fetchMessages(dialogId));
    }
  }, [dialogId]);

  return <BaseMessages isLoading={isLoading} items={messages} />;
};

export default Messages;
