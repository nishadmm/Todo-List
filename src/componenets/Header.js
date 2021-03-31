import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <header style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>TodoList </header>
        < Link to='/' style={link} >Home</Link> | <Link to='/about' style={link} >About</Link>
      </div>
    )
  }
}

const headerStyle = {
  backgroundColor: '#444',
  padding: '20px',
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bolder'
}

const link = {
  color: '#fff',
  textDecoration: 'none'
}
