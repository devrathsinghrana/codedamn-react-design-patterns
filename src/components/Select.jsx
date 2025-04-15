import React, { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

export const useSelect = () => {
  const state = useContext(SelectContext);
  if (!state) throw new Error("Render Option Com inside Select");
  return state;
};

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  React.useEffect(() => {
    setValue(props.value);
  }, []);

  return (
    <div className="select-container">
      <SelectContext.Provider value={{ value, setValue, setOpen }}>
        <div onClick={(e) => setOpen((e) => !e)}>{value}</div>
        {open && props.children}
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
