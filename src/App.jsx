//拡張子jsxはコンポーネントの証

import React from "react";

const App = () => {
  const onClicButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    //エラーを回避するためだけの囲い
    //    <React.Fragment>
    //省略可
    <>
      <h1 style={{ color: "red" }}>Hellow</h1>
      <p style={contentStyle}>How are you?</p>
      <button onClick={onClicButton}>botton</button>
    </>
    //   </React.Fragment>
  );
};

export default App;
