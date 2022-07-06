import React from "react";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

import { Message, Dialogs, Status, ChatInput } from "components";

import "styles/layouts/_chat.scss";

const { Search } = Input;

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
          <div className="chat__sidebar-search">
            <Search placeholder="Поиск контактов" />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userID={0}
              items={[
                {
                  _id: "365cc0d1614e2ddb4aeda0993g412123e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365cc0d1614e2ddb4aeda09d93412123e",
                    fullname: "Федор Достоевский",
                    avatar: null,
                  },
                },
                {
                  _id: "365cc0d1614e2ddasb4aeda099341e2123e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365cc0d1614e2ddb4afweda0993412g123e",
                    fullname: "Федор Достоевский",
                    avatar: null,
                  },
                },
                {
                  _id: "365cc0d1614e2ddb4aeda099341212c3e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365cc0d1614e2ddb4aeda0993412123e",
                    fullname: "Федор Достоевский",
                    avatar: null,
                  },
                },
                {
                  _id: "365cc0d1614e2ddb4afeda09934121c23e",
                  text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
                  isReaded: false,
                  createdAt: "Tue Jun 03 2022 14:35:58",
                  user: {
                    _id: "365cc0d1614e2ddb4aeda0993412123e",
                    fullname: "Федор Достоевский",
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
                    fullname: "Федор Достоевский",
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
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
              attachments={[
                {
                  filename: "blabla",
                  url: "https://images.unsplash.com/photo-1654440326935-38b7f7c4257f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTgzNQ&ixlib=rb-1.2.1&q=80&w=1080",
                },
                {
                  filename: "hiha",
                  url: "https://images.unsplash.com/photo-1654960684701-198bf60d57ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTgxMg&ixlib=rb-1.2.1&q=80&w=1080",
                },
                {
                  filename: "hushua",
                  url: "https://images.unsplash.com/photo-1654660043141-ae058cf9f0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTg0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                },
              ]}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
              date={new Date("Fri Jun 17 2022 11:07:59")}
            />
            <Message
              avatar="https://sun1-90.userapi.com/s/v1/if1/xHHZE0PJoO5p2xKx-jDVCqmRhgiDh2E-sWxyj1HKnjXbX5IFHEzRDa2bDZYXxpoRf5s0zSAi.jpg?size=100x100&quality=96&crop=159,99,267,267&ava=1"
              text="Привет все круто было очень здорово мы сделали верстку сообщения и познакомились с новой фишкой scss"
              date={new Date("Fri Jun 17 2022 11:15:59")}
              isMe={true}
              isReaded={true}
            />
            <Message
              avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
              attachments={[
                {
                  filename: "hushua",
                  url: "https://images.unsplash.com/photo-1654660043141-ae058cf9f0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTg0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                },
              ]}
            />
          </div>
          <div className="chat__dialogs-input">
            <ChatInput />
          </div>
        </div>
      </div>
      {/* <Dialogs
        userID={0}
        items={[
          {
            _id: "365cc0d1614e2ddb4aeda0993412123e",
            text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
            isReaded: false,
            createdAt: "Tue Jun 03 2022 14:35:58",
            user: {
              _id: "365cc0d1614e2ddb4aeda0993412123e",
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
              _id: "365cc0d1614e2ddb4aeda0993412123e",
              fullname: "Джеймс Хэтфилд",
              avatar:
                "https://avatars.mds.yandex.net/i?id=2a0000017a015fde477a8d0496cdfe417b0c-4884508-images-thumbs&n=13",
            },
          },
        ]}
      /> */}
      {/* 
      <Message
        avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
        text="Привет как дела что нового что уже сделано и как это работает покажи те мен"
        date={new Date("Fri Jun 17 2022 11:07:59")}
        attachments={[
          {
            filename: "blabla",
            url: "https://images.unsplash.com/photo-1654440326935-38b7f7c4257f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTgzNQ&ixlib=rb-1.2.1&q=80&w=1080",
          },
          {
            filename: "hiha",
            url: "https://images.unsplash.com/photo-1654960684701-198bf60d57ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTgxMg&ixlib=rb-1.2.1&q=80&w=1080",
          },
          {
            filename: "hushua",
            url: "https://images.unsplash.com/photo-1654660043141-ae058cf9f0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTg0Mw&ixlib=rb-1.2.1&q=80&w=1080",
          },
        ]}
      />
      <Message
        avatar="https://sun1-90.userapi.com/s/v1/if1/xHHZE0PJoO5p2xKx-jDVCqmRhgiDh2E-sWxyj1HKnjXbX5IFHEzRDa2bDZYXxpoRf5s0zSAi.jpg?size=100x100&quality=96&crop=159,99,267,267&ava=1"
        text="Привет все круто было очень здорово мы сделали верстку сообщения и познакомились с новой фишкой scss"
        date={new Date("Fri Jun 17 2022 11:15:59")}
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
        attachments={[
          {
            filename: "hushua",
            url: "https://images.unsplash.com/photo-1654660043141-ae058cf9f0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2OTg0Mw&ixlib=rb-1.2.1&q=80&w=1080",
          },
        ]}
      />
      <Message
        avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
        isTyping
      /> */}

      {/* <Message
        avatar="https://sun1-14.userapi.com/s/v1/if1/eEzYHZfhvKfU7DdcuQ802HRHjMU88BpdnirqnxsJh96U4HniroO5Tfe_FKLNIn07qPlF56Gt.jpg?size=100x100&quality=96&crop=0,0,300,300&ava=1"
        date={new Date("Fri Jun 17 2022 11:07:59")}
        audio="https://zvukipro.com/uploads/files/2022-05/1651398484_1393565345543.mp3"
      /> */}
    </section>
  );
};

export default Home;
