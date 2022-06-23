import React from "react";
import classNames from "classnames";
import { Time, CheckedIcon } from "../";

import "./DialogItem.scss";

const DialogItem = ({ user, message, unreaded }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname}`} /> */}
        <img
          src="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
          alt=""
        />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <p>Федор Достоевский</p>
          <span>
            {/* <Time date={new Date()} /> */}
            10:15
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>Мы все свидетельствуем Вас наши дорогие друзья</p>
          <CheckedIcon isMe={true} isReaded={true} />
          {unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">{unreaded}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
