import React, { Component } from 'react'
import bannerImg from '../images/restauranfood.jpg'

export default class About extends Component {
  render () {
    return (
      <>
        <section id='about'>
          <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>

            <p>
              we are a family owned mediterrnean retaurant focused on
              traditional recipes served with a modern twist{' '}
            </p>
          </section>
          <section className='bannerImage'>
            <img src={bannerImg} alt='restaurant food'></img>
          </section>
        </section>
      </>
    )
  }
}
