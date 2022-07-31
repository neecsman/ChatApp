import React from "react";
import { Empty, Spin } from "antd";

import classNames from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({ isLoading, items }) => {
  return (
    <div className={classNames("messages", { "messages--loading": isLoading })}>
      {isLoading && items ? (
        <Spin size="large" tip="Загружаю диалог..."></Spin>
      ) : items ? (
        items.map((item) => <Message {...item} />)
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

export default Messages;
