import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducers from "../src/reducer/index.jsx"
import {configureStore} from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
const store=configureStore({
  reducer:rootReducers
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <Toaster/>
    </Provider>
  </React.StrictMode>
);