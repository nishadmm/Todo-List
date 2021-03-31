import { Component } from 'react'
import Todo from './Todo';
import PropTypes from 'prop-types'

export default class Todos extends Component {
  render() {
    const { todos } = this.props
    return (
      todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={this.props.onComplete}
          onDelete={this.props.onDelete}
        />
      )
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
