import React from "react";
import { orderBy } from "lodash";
import { DialogItem } from "../";
import { Input, Empty } from "antd";
import { FormOutlined, SolutionOutlined } from "@ant-design/icons";

const { Search } = Input;

const Dialogs = ({ items, onSearch, value }) => {
  return (
    <div className="dialogs">
      <div className="chat__sidebar-header">
        <SolutionOutlined style={{ fontSize: "18px" }} />
        <span>Список диалогов</span>
        <FormOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
      </div>
      <div className="chat__sidebar-search">
        <Search
          placeholder="Поиск диалога"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
        />
      </div>
      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map((item) => (
          <DialogItem
            key={item.id}
            // isMe={item.author.id === userId}
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
