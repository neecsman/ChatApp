import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Time, CheckedIcon } from "../";

import "./Message.scss";

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1,
      })}
    >
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__content">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}

        <div className="message__attachments">
          {attachments &&
            attachments.map(({ url, filename }) => (
              <div key={url + filename} className="message__attachments-item">
                <img src={url} alt={filename} />
              </div>
            ))}
        </div>
        <div className="message__date">
          {date && (
            <span>
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
      <div className="message__checked">
        <CheckedIcon isMe={isMe} isReaded={isReaded} />
        {/* {isMe && isReaded ? (
          <Checked fill="#25ADFF" style={{ width: "20px" }} />
        ) : (
          <NoChecked style={{ width: "20px" }} />
        )} */}
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  date: PropTypes.object,
  text: PropTypes.string,
  user: PropTypes.object,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;
