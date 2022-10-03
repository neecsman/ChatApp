import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDialogs } from "../redux/dialogsSlice";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ userId }) => {
  const items = useSelector((state) => state.dialogs.dialogs);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([...items]);

  useEffect(() => {
    dispatch(fetchDialogs());
  }, [dispatch]);

  useEffect(() => {
    setFiltered([...items]);
  }, [items]);

  const onChangeInput = (value) => {
    setFiltered(
      items.filter(
        (dialogs) =>
          dialogs.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
          0
      )
    );
    setValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      value={value}
    />
  );
};

export default Dialogs;
