import React from "react";

const GenericStyleHoc = (Component) => {
  return (props) => {
    console.log("props", props);
    return (
      <Component
        {...props}
        style={{ textDecoration: "underline", color: "red" }}
      />
    );
  };
};

const Text = (props) => <p {...props}>Some text</p>;
const TextWithUnderline = GenericStyleHoc(Text);
const Para = (props) => <p {...props}>Some para</p>;
const ParaWithUnderline = GenericStyleHoc(Para);

const HigherOrderComponent = () => {
  return (
    <div>
      HigherOrderComponent
      <Text />
      <TextWithUnderline hey={"hey"} />
      <Para />
      <ParaWithUnderline />
    </div>
  );
};

export default HigherOrderComponent;
