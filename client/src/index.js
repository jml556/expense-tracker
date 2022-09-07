import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ThemeProvider from "./context";
import store from "./reducers/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </ThemeProvider>
);
