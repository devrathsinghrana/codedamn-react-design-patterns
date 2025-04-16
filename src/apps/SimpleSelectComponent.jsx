import React from "react";
import SimpleSelect from "../components/SimpleSelect";

const SimpleSelectComponent = () => {
  return (
    <div>
      SimpleSelectComponent
      <SimpleSelect
        options={["Apple", "Banana", "Cherry"]}
        onChange={(val) => console.log("Selected:", val)}
      />
    </div>
  );
};

export default SimpleSelectComponent;
