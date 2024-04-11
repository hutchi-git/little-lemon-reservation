import React, { Component } from 'react'
import logo from '../images/Logo .svg'

export default class Footer extends Component {
  render () {
    return (
      <>
        <footer>
          <section className='logo-section'>
            <img src={logo} alt='logo' />
          </section>
          <section>
            <h2>Doormat Navigation</h2>
            <ul>
              <li>
                <a href='#'> Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Menu</a>
              </li>
              <li>
                <a href='#'>Reservations</a>
              </li>
              <li>
                <a href='#'>Order Online</a>
              </li>
              <li>
                <a href=''>Login</a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Contact</h2>
            <ul>
              <li>
                <address>
                  1 876 567 2345 <br />
                  CustomerSer@littleLemon.com
                  <br />
                  Box 564, Disneyland
                  <br />
                  USA
                </address>
              </li>
            </ul>
          </section>
          <section>
            <h2>Social Media Liks</h2>
            <ul>
              <li>
                <a href='http://'>Facebook : littlelemonRes </a>
              </li>
              <li>
                <a href='http://'>Instagram : littlelemonRes</a>
              </li>
              <li>
                <a href='http://'>Twitter : littlelemonRes</a>
              </li>
            </ul>
          </section>
        </footer>
      </>
    )
  }
}
