import React from "react";
import ReactDOM from "react-dom";
import Header from "nav/Header";
import { StoreProvider, useStore } from "store/store";

import "./index.css";

const App = () => {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <Header count={count} />
      <div>Name: base-app</div>
      <button onClick={() => decrement(count - 1)}>-</button>
      <button onClick={() => increment(count + 1)}>+</button>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
