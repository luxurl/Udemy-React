//拡張子jsxはコンポーネントの証

import React from "react";
import ColofulMessage from "./compornents/ColorFulMessage";

const App = () => {
  const onClicButton = () => alert();

  return (
    //エラーを回避するためだけの囲い
    //    <React.Fragment>
    //省略可
    <>
      <h1 style={{ color: "red" }}>Hellow</h1>
      <ColofulMessage color="blue">How are you?</ColofulMessage>
      <ColofulMessage color="pink">I'm fine</ColofulMessage>
      <button onClick={onClicButton}>botton</button>
    </>
    //   </React.Fragment>
  );
};

export default App;
