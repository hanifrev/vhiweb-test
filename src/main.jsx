import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "./app/store.js";
import { auth } from "./features/auth.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={auth}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
