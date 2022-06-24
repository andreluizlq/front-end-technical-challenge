import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StoresProvider } from "./context/StoreContext";

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider>
      <App />
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
