import React from "react";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import { Messages, Status, ChatInput } from "components";
import { Dialogs } from "containers";

import "styles/layouts/_chat.scss";

const Home = () => {
  return (
    <section className="home">
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
