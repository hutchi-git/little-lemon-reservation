import React, { Component } from 'react'
import bannerImg from '../images/restauranfood.jpg'

export default class Main extends Component {
  render () {
    return (
      <>
        <main>
          <section className='hero'>
            <section className='bannerContent'>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>

              <p>
                we are a family owned mediterrnean retaurant focused on
                traditional recipes served with a modern twist{' '}
              </p>
              <button>Reserve a Table</button>
            </section>
            <section className='bannerImage'>
              <img src={bannerImg} alt='restaurant food'></img>
            </section>
          </section>
          <section>
            <h1>This weeks specials!</h1>
          </section>
          <section>
            <h1>Testimonials</h1>
          </section>
          <section>
            <h1>Little Lemon</h1>
          </section>
        </main>
      </>
    )
  }
}
