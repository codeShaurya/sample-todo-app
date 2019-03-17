import React, { Component } from "react";

class App extends Component {
  state = {
    todo: "",
    todos: []
  };

  componentWillMount = () => {
    console.log("Will mount");
  };

  componentDidMount = () => {
    console.log("Did mount");
  };

  addTodo = () => {
    const newTodo = this.state.todos;
    newTodo.push(this.state.todo);

    this.setState({ todos: newTodo });
    this.setState({ todo: "" });
  };

  onChange = e => {
    this.setState({ todo: e.target.value });
  };

  delet = index => {
    const newTodo = this.state.todos;
    newTodo.splice(index, 1);
    this.setState({ todos: newTodo });
  };

  render() {
    console.log("Render");

    return (
      <div className="App">
        <h1>Todo List</h1>
        <input
          placeholder="Enter note"
          value={this.state.todo}
          onChange={this.onChange}
        />
        <button onClick={this.addTodo}>add to list</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <div key={index}>
              <li>{todo}</li>
              <button onClick={e => this.delet(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
