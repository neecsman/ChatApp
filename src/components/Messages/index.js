import { useRef, useEffect } from "react";
import { Empty, Spin } from "antd";

import classNames from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({ isLoading, items }) => {
  const endMsg = useRef(null);
  const scrollToBottom = () => {
    endMsg.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [items]);

  return (
    <div className={classNames("messages", { "messages--loading": isLoading })}>
      {isLoading && items ? (
        <Spin size="large" tip="Загружаю диалог..."></Spin>
      ) : items ? (
        <>
          {items.map((item) => (
            <Message key={item.id} {...item} />
          ))}
          <div ref={endMsg} />
        </>
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

export default Messages;
