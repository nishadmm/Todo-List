import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    const newtitle = this.state.title.trim()
    newtitle !== '' ? this.props.addTodo(newtitle) : alert('Please Enter your TODO')

    this.setState({ title: '' })
  }

  onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  render() {
    return (
      <form
        style={{ display: 'flex', margin: '1rem 0', }}
        onSubmit={this.onSubmit} >
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="Enter Todo..."
          style={{ flex: '10', padding: '7px' }}
          autoComplete='off'
        />
        <input
          type="submit"
          value="Submit"
          style={{ flex: '2' }}
          className='btn'
        />
      </ form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
