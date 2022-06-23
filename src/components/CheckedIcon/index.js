import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Checked } from "assets/img/check.svg";
import { ReactComponent as NoChecked } from "assets/img/nocheck.svg";

const CheckedIcon = ({ isMe, isReaded }) => {
  return (
    <>
      {isMe && isReaded ? (
        <Checked fill="#25ADFF" style={{ width: "16px" }} />
      ) : (
        <NoChecked style={{ width: "16px" }} />
      )}
    </>
  );
};

CheckedIcon.propTypes = {
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default CheckedIcon;
