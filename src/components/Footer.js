import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <>
        <footer>
          <section>
            <img src='/public/Logo.svg' alt='logo' />
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
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
          <section>
            <h2>Social Media Liks</h2>
            <ul>
              <li>
                <a href='http://'>face</a>
              </li>
              <li>
                <a href='http://'>gram</a>
              </li>
              <li>
                <a href='http://'>x</a>
              </li>
            </ul>
          </section>
        </footer>
      </>
    )
  }
}
