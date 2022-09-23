import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "../src/lib/firebase.prod";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
