import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormOutlined, UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/userSlice";
import { Avatar } from "../";

import "./profile.scss";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="chat__sidebar-header">
        <UserOutlined style={{ fontSize: "18px" }} />
        <span>Аккаунт</span>
        <FormOutlined style={{ color: "#fff" }} />
      </div>
      <div className="profile">
        <div className="profile__avatar">
          <Avatar user={user.user} />
        </div>
        <div className="profile__info">
          <div className="profile__info-name">
            <h2>{user.user.fullname}</h2>
          </div>
          <div className="profile__info-email">
            <b>{user.user.email}</b>
          </div>
        </div>
        <div className="profile__exit">
          <span
            className="logout"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Выход
          </span>
        </div>
      </div>
    </>
  );
}

export default Profile;
