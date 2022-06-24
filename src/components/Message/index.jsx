import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Time, CheckedIcon } from "../";

import wave from "assets/img/wave.svg";
import play from "assets/img/play.svg";
import pause from "assets/img/pause.svg";

import "./Message.scss";

const Message = ({
  avatar,
  user,
  text,
  audio,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--is-audio": audio,
        "message--image": attachments && attachments.length === 1,
      })}
    >
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__content">
        {(audio || text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {audio && (
              <div className="message__audio">
                <div className="message__audio-progress"></div>
                <div className="message__audio-info">
                  <div className="message__audio-btn">
                    <button>
                      {isPlaying ? (
                        <img src={pause} alt="pause" />
                      ) : (
                        <img src={play} alt="play" />
                      )}
                    </button>
                  </div>
                  <div className="message__audio-wave">
                    <img src={wave} alt="Wave" />
                  </div>
                  <span className="message__audio-duration">00:19</span>
                </div>
              </div>
            )}
          </div>
        )}

        {attachments && (
          <div className="message__attachments">
            {attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
          </div>
        )}

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
  audio: PropTypes.string,
  date: PropTypes.object,
  text: PropTypes.string,
  user: PropTypes.object,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;
