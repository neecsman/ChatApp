import { Drawer, Button } from "antd";
import { useState, useEffect } from "react";
import { FormOutlined } from "@ant-design/icons";
import UserServuce from "../../utils/service/UserService";
import { Avatar } from "../";
import { useSelector } from "react-redux";
const Users = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const me = useSelector((state) => state.user.user.id);

  const getUsers = async () => {
    await UserServuce.getAll().then((users) => setUsers(users.data));
  };

  const showDrawer = () => {
    setOpen(true);
    getUsers();
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormOutlined
        onClick={showDrawer}
        style={{ fontSize: "18px", cursor: "pointer" }}
      />

      <Drawer
        title="Пользователи"
        placement="left"
        onClose={onClose}
        open={open}
      >
        {users &&
          users
            .filter((item) => item.id !== me)
            .map((user) => {
              return (
                <div key={user.id} className="dialogs__item">
                  <div className="dialogs__item-avatar">
                    <Avatar user={user} />
                  </div>
                  <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                      <p>{user.fullname}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </Drawer>
    </>
  );
};

export default Users;
