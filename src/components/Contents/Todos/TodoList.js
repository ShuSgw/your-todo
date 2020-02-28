import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { db } from "../../../Firebase";

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: [],
      setNextId: 1,
      selectedOption: undefined
    };
  }

  handleAddTodo = e => {
    e.preventDefault();
    const typedTodo = e.target.elements[0].value.trim();
    if (typedTodo) {
      this.setState(() => ({
        todo: [
          ...this.state.todo,
          { id: this.state.setNextId, title: typedTodo }
        ],
        setNextId: this.state.setNextId + 1
      }));
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
    db.collection("user")
      .get()
      .then(querySnapshot => {
        var firecloud = [];
        querySnapshot.forEach(function(doc) {
          Object.assign(firecloud, doc.data().todo);
          console.log(doc.data().todo);
        });
        this.setState({ todo: [...firecloud] });
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
