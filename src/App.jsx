//拡張子jsxはコンポーネントの証

import React, { useEffect, useState } from "react";
import ColofulMessage from "./compornents/ColorFulMessage";

//再レンダリングをしている
//App関数の中を頭から実行される
//propsの値が変わった場合、ステートが変更された場合など
//大きなプロダクトになると再レンダリングに時間がかかる可能性が出てきたり
//バグが発生したしたりする
const App = () => {
  console.log("最初");

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

  //第2引数が[]→最初の一回だけ処理を実行
  //第2引数が[num]→numが変化したときだけ処理を実行する
  useEffect(() => {
    //numが3の倍数のときに顔文字を表示
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

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
