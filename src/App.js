import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './componenets/Header';
import AddTodo from './componenets/AddTodo';
import Todos from './componenets/Todos';
import About from './componenets/About';
import { } from './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Meeting with Boss',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'PTA Meeting',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Gym',
        completed: false
      }
    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [newTodo, ...this.state.todos] })
  }

  onComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route path='/' exact render={(props) =>
              <>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} onComplete={this.onComplete} onDelete={this.onDelete} />
              </>
            } />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
