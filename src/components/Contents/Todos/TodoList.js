import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { db } from "../../../Firebase";
import firebase from "../../../Firebase";

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: [],
      selectedOption: undefined
    };
  }

  handleAddTodo = e => {
    e.preventDefault();
    const typedTodo = e.target.elements[0].value.trim();
    if (typedTodo) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const uid = firebase.auth().currentUser.uid;
          const userRef = db.ref(`users/${uid}`);
          const predictedID = db
            .ref()
            .child("users")
            .push().key;

          userRef.push({ title: typedTodo }).then(() => {
            this.setState(() => ({
              todo: [
                ...this.state.todo,
                {
                  id: predictedID,
                  title: typedTodo
                }
              ]
            }));
          });
        }
      });
    }
    e.target.elements[0].value = "";
  };
  handleDelete = id => {
    this.setState(() => ({
      todo: this.state.todo.filter(todo => {
        return todo.id !== id;
      })
    }));
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid;
        db.ref(`users/${uid}`)
          .once("value")
          .then(snap => {
            const todos = [];
            snap.forEach(childSnap => {
              todos.push({
                id: childSnap.key,
                title: childSnap.val().title
              });
            });
            this.setState({ todo: todos });
          });
      }
    });
    // .on("value", snap => {
    //   const todos = [];
    //   snap.forEach(childSnap => {
    //     todos.push({
    //       id: childSnap.key,
    //       title: childSnap.val().title
    //     });
    //   });
    //   this.setState({ todo: todos });
    // });
  }
  render() {
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <Todos todos={this.state.todo} handleDelete={this.handleDelete}></Todos>
      </div>
    );
  }
}
export default TodoList;
