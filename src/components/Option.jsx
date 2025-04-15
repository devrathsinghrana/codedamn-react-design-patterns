import React from "react";
import { useSelect } from "./Select";

const Option = (props) => {
  const selectContextObjectValue = useSelect();
  return (
    <div
      onClick={() => {
        selectContextObjectValue.setValue(props.value);
        selectContextObjectValue.setOpen((e) => !e);
      }}
    >
      {props.text}
    </div>
  );
};

export default Option;
