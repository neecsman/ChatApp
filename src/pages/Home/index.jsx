import React from "react";

import { Message, DialogItem } from "components";
const Home = () => {
  return (
    <section>
      <div className="dialogs">
        <DialogItem
          user={{
            fullname: "Федор Достоевский",
            isOnline: true,
          }}
          unreaded={1}
        />
      </div>

      {/* <Dialogs
        items={[
          {
            user: {
              fullname: "Федор Достоевский",
              avatar: null,
            },
            message: {
              text: "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки",
              isReaded: false,
              createdAt: new Date();
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
    </section>
  );
};

export default Home;
