import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { db } from "../src/lib/firebase.prod";
import { FirebaseContext } from "./contexts/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ db }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
