import React from "react";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import { Messages, Status, ChatInput } from "components";
import { Dialogs } from "containers";

// import dialogsJSON from "dialogs.json";

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
            <Dialogs
              userID={0}
              items={[
                {
                  _id: "32kj2b40d1614e2ddb4aeda0993g412123e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "32kj2b40d1614e2ddb4aeda0993g412123e",
                    fullname: "Кирк Хаммет",
                    avatar: null,
                  },
                },
                {
                  _id: "365lk2n3414e2ddasb4aeda099341e2123e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365lk2n3414e2ddasb4aeda099341e2123e",
                    fullname: "Джейсон Стетхэм",
                    avatar: null,
                  },
                },
                {
                  _id: "3kj23n51614e2ddb4aeda099341212c3e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "3kj23n51614e2ddb4aeda099341212c3e",
                    fullname: "Ник Фьюри",
                    avatar: null,
                  },
                },
                {
                  _id: "323kj62b3614e2ddb4afeda09934121c23e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "323kj62b3614e2ddb4afeda09934121c23e",
                    fullname: "Лев Толстой",
                    avatar: null,
                  },
                },
                {
                  _id: "365cc0d1614e2ddb4aeda09934121b23e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365cc0d1614e2ddb4aeda099341f2123e",
                    fullname: "Девид Блэйн",
                    avatar: null,
                  },
                },
                {
                  _id: "365cc0d1614e2ddb4aesdda0993412d123e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365cc0d1614e2ddb4sdfaeda09934x12123e",
                    fullname: "Федор Достоевский",
                    avatar: null,
                  },
                },
                {
                  _id: Math.random(),
                  text: "Привет! Как дела?",
                  isReaded: true,
                  createdAt: "Tue Jun 04 2022 12:36:58",
                  user: {
                    _id: "365cc0d1614e2ddb4sdfaeda0s993z412123e",
                    fullname: "Джеймс Хэтфилд",
                    avatar:
                      "https://avatars.mds.yandex.net/i?id=2a0000017a015fde477a8d0496cdfe417b0c-4884508-images-thumbs&n=13",
                  },
                },
              ]}
            />
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
