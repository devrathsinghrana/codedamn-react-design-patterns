import React from "react";
import {
  Select,
  SelectTrigger,
  SelectList,
  SelectOption,
} from "../components/CompoundSelect";

const CompoundSelectComponent = () => {
  return (
    <div>
      CompoundSelectComponent
      <Select>
        <SelectTrigger />
        <SelectList>
          <SelectOption value="Apple">Apple</SelectOption>
          <SelectOption value="Banana">Banana</SelectOption>
          <SelectOption value="Cherry">Cherry</SelectOption>
        </SelectList>
      </Select>
    </div>
  );
};

export default CompoundSelectComponent;
