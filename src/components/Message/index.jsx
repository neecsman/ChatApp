import React, { useState, useEffect, useRef } from "react";
import { convertCurrentTime } from "utils/helpers";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Time, CheckedIcon } from "../";

import wave from "assets/img/wave.svg";
import play from "assets/img/play.svg";
import pause from "assets/img/pause.svg";

import "./Message.scss";

const MessageAudio = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => {
      setCurrentTime(audioRef.current.duration);
    });

    audioRef.current.addEventListener("playing", () => {
      setIsPlaying(true);
    });
    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    });
    audioRef.current.addEventListener("pause", () => {
      setIsPlaying(false);
    });

    audioRef.current.addEventListener("timeupdate", () => {
      const duration = (audioRef.current && audioRef.current.duration) || 0;
      setCurrentTime(audioRef.current.currentTime);
      setProgress((audioRef.current.currentTime / duration) * 100);
    });
  }, []);
  return (
    <div className="message__audio">
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
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
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

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
            {audio && <MessageAudio audioSrc={audio} />}
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
