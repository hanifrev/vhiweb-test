import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "./store.js";
import { auth } from "./features/auth.js";
import { api } from "./features/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={auth}>
      <ApiProvider api={api}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </ApiProvider>
  </React.StrictMode>
);
