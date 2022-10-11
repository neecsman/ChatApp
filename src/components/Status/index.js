import React from "react";
import classNames from "classnames";

import "./Status.scss";
import { useSelector } from "react-redux";

const Status = ({ online }) => {
  const { dialogs, currentDialog } = useSelector((state) => state.dialogs);
  const me = useSelector((state) => state.user.user.id);
  let dialogInfo = dialogs.filter((dialog) => dialog.id === currentDialog);

  return (
    <>
      {currentDialog ? (
        <div className="chat__dialogs-header-info">
          <div className="chat__dialogs-header-username">
            {dialogInfo[0].author && dialogInfo[0].author.id === me
              ? dialogInfo[0].partner.fullname
              : dialogInfo[0].author.fullname}
          </div>
          <div className="chat_dialogs-header-status">
            <div className={classNames("status", { "status--online": online })}>
              {online ? "онлайн" : "офлайн"}
            </div>
          </div>
        </div>
      ) : (
        <div className="chat__dialogs-header-info">
          <div className="chat__dialogs-header-username">Выберите диалог</div>
        </div>
      )}
    </>
  );
};

export default Status;
