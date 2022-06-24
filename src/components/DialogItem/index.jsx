import React from "react";
import classNames from "classnames";
import { format, isToday } from "date-fns";
import { CheckedIcon } from "../";

import "./DialogItem.scss";

const getMessageTime = (createdAt) => {
  if (isToday(new Date(createdAt))) {
    return format(new Date(createdAt), "HH:mm");
  } else {
    return format(new Date(createdAt), "dd.mm.yyyy");
  }
};

const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
    return (
      <img
        src="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
        alt=""
      />
    );
  }
};

const DialogItem = ({ user, text, createdAt, unreaded, isMe }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {getAvatar(user.avatar)}
        {/* <img src={user.avatar} alt={`${user.fullname}`} /> */}
        {/* <img
          src="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
          alt=""
        /> */}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <p>{user.fullname}</p>
          <span>{getMessageTime(createdAt)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe && <CheckedIcon isMe={true} isReaded={true} />}
          {unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">{unreaded}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
