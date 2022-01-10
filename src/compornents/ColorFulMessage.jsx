import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);

  const contentStyle = {
    //プロパティと同じ変数名の場合省略可
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
