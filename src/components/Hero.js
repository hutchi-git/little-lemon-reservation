import React, { Component } from 'react'
import bannerImg from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default class Hero extends Component {
  render () {
    return (
      <>
        <section id='Hero'>
          <div className='banner'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              we are a family owned mediterrnean retaurant focused on
              traditional recipes served with a modern twist
            </p>
            <Link to='/Reservation'>
              <button aria-label='On Click'>Reserve a Table</button>
            </Link>

            <div className='bannerImage'>
              <img src={bannerImg} alt='restaurant food'></img>
            </div>
          </div>
        </section>
      </>
    )
  }
}
