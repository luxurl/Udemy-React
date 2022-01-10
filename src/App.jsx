//拡張子jsxはコンポーネントの証

import React, { useState } from "react";
import ColofulMessage from "./compornents/ColorFulMessage";

const App = () => {
  //ボタンを押すとカウントアップする処理
  const onClicCountUp = () => {
    setNum(num + 1);
  };
  //ステートの変数名とセッターを分割代入
  const [num, setNum] = useState(0);
  return (
    //エラーを回避するためだけの囲い
    //    <React.Fragment>
    //省略可

    <>
      <h1 style={{ color: "red" }}>Hellow</h1>
      <ColofulMessage color="blue">How are you?</ColofulMessage>
      <ColofulMessage color="pink">I'm fine</ColofulMessage>
      <button onClick={onClicCountUp}>botton</button>
      <p>{num}</p>
    </>
    //   </React.Fragment>
  );
};

export default App;
