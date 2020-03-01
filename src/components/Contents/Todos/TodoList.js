import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { db } from "../../../Firebase";

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
      const userRef = db.ref("users/KMry5zTzFrgaM9DWdtZWVOF7o3N2/");
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
    db.ref("users/KMry5zTzFrgaM9DWdtZWVOF7o3N2")
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
