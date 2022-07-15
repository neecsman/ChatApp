import React from "react";
import { Empty } from "antd";

import { Message } from "../";

const Messages = ({ items }) => {
  return items ? (
    <div>
      {items.map((item) => (
        <Message {...item} />
      ))}
    </div>
  ) : (
    <Empty description="Откройте диалог" />
  );
};

export default Messages;
