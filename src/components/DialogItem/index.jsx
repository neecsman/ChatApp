import React from "react";
import Time from "../Time";

const DialogItem = ({ user, message }) => {
  return (
    <div className="dialogs__item">
      <div className="dialogs__item-avatar">
        <img src={user.avatar} alt={`${user.fullname}`} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Федор Достоевский</b>
          <span>
            <Time date={new Date()} />
          </span>
        </div>
        <div className="dialogs__item-info-bottom"></div>
      </div>
    </div>
  );
};

export default DialogItem;
