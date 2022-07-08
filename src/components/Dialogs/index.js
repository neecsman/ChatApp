import React from "react";
import { orderBy } from "lodash";
import { DialogItem } from "../";
import { Input, Empty } from "antd";

const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, value }) => {
  return (
    <div className="dialogs">
      <div className="chat__sidebar-search">
        <Search
          placeholder="Поиск контактов"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
        />
      </div>
      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map((item) => (
          <DialogItem
            key={item._id}
            isMe={item.user._id === userId}
            {...item}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={"Ничего не найдено"}
        />
      )}
    </div>
  );
};

export default Dialogs;
