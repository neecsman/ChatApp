import { useState, useEffect } from "react";
import UserServuce from "../../utils/service/UserService";
import { Avatar } from "../";
import { useSelector } from "react-redux";

const Users = () => {
  const [users, setUsers] = useState([]);
  const me = useSelector((state) => state.user.user.id);

  useEffect(() => {
    UserServuce.getAll().then((users) => setUsers(users.data));
  }, []);

  return (
    <>
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
