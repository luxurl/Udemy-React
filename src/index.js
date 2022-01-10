import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    //エラーを回避するためだけの囲い
    //    <React.Fragment>
    //省略可
    <>
      <h1>Hellow</h1>
      <p>How are you?</p>
    </>
    //   </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
