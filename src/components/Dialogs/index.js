import React from "react";
import { DialogItem } from "../";

const Dialogs = ({ items }) => {
  return (
    <div className="dialogs">
      <DialogItem
        user={{
          fullname: "Федор Достоевский",
          isOnline: true,
        }}
        unreaded={1}
      />
    </div>
  );
};

export default Dialogs;
