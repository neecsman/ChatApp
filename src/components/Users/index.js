import { Avatar } from "../";
import { useSelector } from "react-redux";
import { Input } from "antd";
import { FormOutlined, UserOutlined } from "@ant-design/icons";

const Users = ({ users, onSearch, value }) => {
  const { Search } = Input;
  const me = useSelector((state) => state.user.user.id);

  return (
    <>
      <div className="chat__sidebar-header">
        <UserOutlined style={{ fontSize: "18px" }} />
        <span>Пользователи</span>
        <FormOutlined style={{ color: "#fff" }} />
      </div>
      <div className="chat__sidebar-search">
        <Search
          placeholder="Поиск пользователя"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
        />
      </div>
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
    </>
  );
};

export default Users;
