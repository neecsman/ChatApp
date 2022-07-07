import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(Array.from(items));

  const onChangeInput = (value) => {
    setFiltered(
      items.filter(
        (dialogs) =>
          dialogs.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
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
