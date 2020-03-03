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
          const newID = db
            .ref(`users/${uid}`)
            .push()
            .getKey();
          db.ref(`users/${uid}/${newID}`)
            .set({ title: typedTodo })
            .then(() => {
              this.setState(() => ({
                todo: [
                  ...this.state.todo,
                  {
                    id: newID,
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
    // db.ref('users').child('-LReyNSJ3rS9gi2tFfNk').remove();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid;
        db.ref(`users/${uid}/${id}`)
          .remove()
          .then(() => {
            this.setState(() => ({
              todo: this.state.todo.filter(todo => {
                return todo.id !== id;
              })
            }));
          });
      }
    });
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
