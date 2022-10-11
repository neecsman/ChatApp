import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import {
  EllipsisOutlined,
  CommentOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Status, ChatInput } from "components";
import { Messages } from "containers";

import "styles/layouts/_chat.scss";
import "./Home.scss";
import { Avatar } from "../../components";

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-dialogs">{<Outlet />}</div>
          <div className="chat__sidebar-footer">
            <Link to="users">
              <UserOutlined style={{ fontSize: "26px" }} />
            </Link>
            <Link to="/">
              <CommentOutlined style={{ fontSize: "26px" }} />
            </Link>
            <Link to="account">
              {" "}
              <Avatar user={user} />
            </Link>
          </div>
        </div>
        <div className="chat__dialogs">
          <div className="chat__dialogs-header">
            <div className="chat__dialogs-header-empty"></div>
            <Status online={true} />
            <EllipsisOutlined style={{ fontSize: "22px" }} />
          </div>
          <div className="chat__dialogs-messages">
            <Messages />
          </div>
          <div className="chat__dialogs-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
