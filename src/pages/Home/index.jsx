import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { Status, ChatInput } from "components";
import { Dialogs, Messages } from "containers";

import "styles/layouts/_chat.scss";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <section className="home">
      <LogoutOutlined
        onClick={() => dispatch(logout())}
        style={{ fontSize: "18px", cursor: "pointer" }}
      />
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined style={{ fontSize: "18px" }} />
              <span>Список диалогов</span>
            </div>
            <FormOutlined style={{ fontSize: "18px" }} />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs userID={0} />
          </div>
        </div>
        <div className="chat__dialogs">
          <div className="chat__dialogs-header">
            <div className="chat__dialogs-header-empty"></div>
            <div className="chat__dialogs-header-username">
              Джеймс Хэтфилд
              <Status online={true} />
            </div>
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
