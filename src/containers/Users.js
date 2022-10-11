import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/userSlice";
import { Users as BaseUsers } from "components";

const Users = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([...users]);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    setFiltered([...users]);
  }, [users]);

  const onChangeInput = (value) => {
    setFiltered(
      users.filter(
        (user) => user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  return <BaseUsers users={filtered} onSearch={onChangeInput} value={value} />;
};

export default Users;
