import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: ["first", "second", "third"],
      selectedOption: undefined
    };
  }

  handleAddTodo = e => {
    e.preventDefault();
    const typedTodo = e.target.elements[0].value.trim();
    if (typedTodo) {
      this.setState(() => ({ todo: [...this.state.todo, typedTodo] }));
    }
    e.target.elements[0].value = "";
  };
  render() {
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <Todos todos={this.state.todo}></Todos>
      </div>
    );
  }
}
export default TodoList;
