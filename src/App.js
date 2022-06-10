import React, { useState } from "react";

function App() {
  const [state, setState] = useState({ count: 0, theme: "blue" });
  const count = state.count;
  const theme = state.theme;
  const handleMinusState = () => {
    // setState(state + 1);//This is not good
    // setState((prevCount) => prevCount - 1); //Because this will is better
    setState((preCount) => ({ ...preCount, count: count - 1 }));
  };
  const handlePlusState = () => {
    // setState(state + 1);
    // setState((prev) => prev + 1);
    setState((preCount) => ({ ...preCount, count: count + 1 }));
  };
  return (
    <>
      <button onClick={handleMinusState}>-</button>
      <button>{count}</button>
      <button>{theme}</button>
      <button onClick={handlePlusState}>+</button>
    </>
  );
}

export default App;
