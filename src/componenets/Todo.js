import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired
  }

  getStyle = () => {
    return {
      backgroundColor: '#eee',
      borderBottom: '2px dashed #444 ',
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { todo } = this.props
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          style={{ marginRight: '10px', verticalAlign: 'center' }}
          onChange={this.props.onComplete.bind(this, todo.id)}
        />
        <span style={{ fontSize: '1.3rem' }}>{todo.title}</span>
        <span style={deleteBtn} onClick={this.props.onDelete.bind(this, todo.id)}>X</span>
      </div>
    )

  }
}

const deleteBtn = {
  float: 'right',
  backgroundColor: 'gray',
  padding: '6px 10px',
  borderRadius: '10px',
  color: '#fff',
  cursor: 'pointer'
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
