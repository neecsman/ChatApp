import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDialog } from "../../redux/dialogsSlice";
import classNames from "classnames";
import { format, isToday } from "date-fns";
import { CheckedIcon, Avatar } from "../";

import "./DialogItem.scss";

const getMessageTime = (created_at) => {
  if (isToday(new Date(created_at))) {
    return format(new Date(created_at), "HH:mm");
  } else {
    return format(new Date(created_at), "dd.MM.yyyy");
  }
};

const DialogItem = ({
  id,
  author,
  partner,
  text,
  created_at,
  unreaded,
  isMe,
  lastMessages,
}) => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.user.id);

  let partnerItem;
  if (me == partner.id) {
    partnerItem = author;
  } else {
    partnerItem = partner;
  }

  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": partnerItem,
      })}
      onClick={() => dispatch(setCurrentDialog(id))}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partnerItem} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <p>{partnerItem.fullname}</p>
          <span>{getMessageTime(created_at)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{lastMessages}</p>
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
