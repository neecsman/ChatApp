import PropTypes from "prop-types";
import { generateAvatarFromHash } from "utils/helpers";

import "./Avatar.scss";

const Avatar = ({ user }) => {
  if (user.avatarPath) {
    return (
      <img
        className="avatar"
        src={user.avatarPath}
        alt={`Avatar ${user.fullname}`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user.id);
    const nameInitials = user.fullname[0].toUpperCase();

    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%`,
        }}
        className="avatar avatar--symbol"
      >
        {nameInitials}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;
