import React, { useState } from 'react'
import logo from '../images/Logo .svg'
import '../../src/styles/Nav.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Nav () {
  const [menuOpen, SetMenuOpen] = useState(false)
  const toggleMenu = () => {
    SetMenuOpen(!menuOpen)
  }

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <HashLink to='/#About'>About</HashLink>
        </li>
        <li>
          <Link to='/'>Menu</Link>
        </li>
        <li>
          <Link to='/Reservation'>Reservations</Link>
          {/* <a herf='/'>Reservations</a> */}
        </li>
        <li>
          <Link to='/'>Order Online</Link>
        </li>
        <li>
          <Link to='/'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
