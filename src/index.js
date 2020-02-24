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
  } else {
    console.log("Logout");
  }
});

// db.collection("sample").add({
//   hello: "Los Angeles",
//   sample: "CA"
// });

// db.collection("sample")
//   .add({
//     name: "マイメロ",
//     age: 27
//   })
//   .then(doc => {
//     console.log(`追加に成功しました (${doc.id})`);
//   })
//   .catch(error => {
//     console.log(`追加に失敗しました (${error})`);
//   });

var docRef = db.collection("sample").doc("I7MH5GEPNeTfzbwV9vSx");

docRef
  .get()
  .then(doc => {
    if (doc.exists) {
      console.log(doc.data());
    } else {
      console.log("404");
    }
  })
  .catch(error => {
    console.log(`cant get the data (${error})`);
  });

db.collection("sample")
  .get()
  .then(query => {
    var buff = [];
    query.forEach(doc => {
      var data = doc.data();
      buff.push([doc.id, data.name, data.age]);
    });
    console.log(buff);
  })
  .catch(error => {
    console.log(`cant get the data (${error})`);
  });
