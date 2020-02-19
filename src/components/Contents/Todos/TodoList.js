import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";

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
