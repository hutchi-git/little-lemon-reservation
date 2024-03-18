import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default class Nav extends Component {
  render () {
    return (
      <>
        <nav>
          <Link to='/' className='nav-item'>
            Home
          </Link>
          <HashLink to='/#about' className='nav-item'>
            About
          </HashLink>
          <Link to='/' className='nav-item'>
            Menu
          </Link>
          <Link to='/Reservation' className='nav-item'>
            Reservations
          </Link>
          <Link to='/' className='nav-item'>
            Order Online
          </Link>
          <Link to='/' className='nav-item'>
            Login
          </Link>
        </nav>
      </>
    )
  }
}
