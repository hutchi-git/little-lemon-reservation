import React, { Component } from 'react'
import bannerImg from '../images/restauranfood.jpg'

export default class About extends Component {
  render () {
    return (
      <>
        <section id='About'>
          <div className='about'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>

            <div className='aboutImage'>
              <img src={bannerImg} alt='restaurant food'></img>
            </div>
          </div>
        </section>
      </>
    )
  }
}
