import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const todos = this.state.todos
    todos.push(this.state.input);
    this.setState({ 
      input: '',
      todos: todos 
    });  
  }

  handleDelete = (item) => {
    const todos = this.state.todos
    todos.splice(item, 1);
    this.setState({ todos });
  }

  render() {
    
    let todoList = this.state.todos.map((todo, index) => {
      return (
        <li key={index}>
          <input type="checkbox" />
          {todo}
          <button onClick={this.handleDelete.bind(this, index)}>X</button>
        </li>
      );
    }, this);
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit}>
            <input 
              value={this.state.input}
              onChange={this.handleChange} />
              <button type="submit">Add Task</button>
          </form>
        </section>
        <section className="todo-list">
          <ul>
            {todoList}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
