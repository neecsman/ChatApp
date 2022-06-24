import React from "react";
import { orderBy } from "lodash";
import { DialogItem } from "../";

const Dialogs = ({ items, userId }) => {
  return (
    <div className="dialogs">
      {orderBy(items, ["createdAt"], ["desc"]).map((item) => (
        <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
      ))}
    </div>
  );
};

export default Dialogs;
