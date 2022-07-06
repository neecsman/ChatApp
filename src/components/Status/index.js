import React from "react";
import classNames from "classnames";

import "./Status.scss";

const Status = ({ online }) => {
  return (
    <div className="chat_dialogs-header-status">
      <div className={classNames("status", { "status--online": online })}>
        {online ? "онлайн" : "офлайн"}
      </div>
    </div>
  );
};

export default Status;
