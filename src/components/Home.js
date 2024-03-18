import React, { Component } from 'react'
import About from './About'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Hero from './Hero'
export default class Home extends Component {
  render () {
    return (
      <>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </>
    )
  }
}
