//拡張子jsxはコンポーネントの証

import React, { useState } from "react";
import ColofulMessage from "./compornents/ColorFulMessage";

const App = () => {
  //ステートの変数名とセッターを分割代入
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //ボタンを押すとカウントアップする処理
  const onClicCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    //エラーを回避するためだけの囲い
    //    <React.Fragment>
    //省略可

    <>
      <h1 style={{ color: "red" }}>Hellow</h1>
      <ColofulMessage color="blue">How are you?</ColofulMessage>
      <ColofulMessage color="pink">I'm fine</ColofulMessage>
      <button onClick={onClicCountUp}>botton</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*^^*)</p>}
    </>
    //   </React.Fragment>
  );
};

export default App;
