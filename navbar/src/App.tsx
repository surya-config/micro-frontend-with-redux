import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { StoreProvider } from "store/store";

import "./index.css";

const App = () => (
  <div>
    <Header />
  </div>
);
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
