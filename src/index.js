import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

import firebase from "./Firebase";
import { db } from "./Firebase";

import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    // const uid = firebase.auth().currentUser.uid;
    // db.ref(`users/${uid}`).push({ title: "todo" });
  } else {
    console.log("Logout");
  }
});

// db.ref().set({ sample: "test" });
