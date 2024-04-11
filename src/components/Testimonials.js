import React, { Component } from 'react'
import star from '../images/2184494.png'
import profile_pic from '../images/1-intro-photo-final.jpg'

export default class Testimonials extends Component {
  render () {
    const Testimonials = [
      {
        img: profile_pic,
        name: 'GaretHo',
        price: 5,
        review: `This place was great! the food, the staff evertything perfect`
      },
      {
        img: profile_pic,
        name: 'GaretHo',
        price: 5,
        review: `This place was great! the food, the staff evertything perfect`
      },
      {
        img: profile_pic,
        name: 'GaretHo',
        price: 5,
        review: `This place was great! the food, the staff evertything perfect`
      },
      {
        img: profile_pic,
        name: 'GaretHo',
        price: 5,
        review: `This place was great! the food, the staff evertything perfect`
      }
    ]
    return (
      <>
        <section id='Testimonials'>
          <h1>Testimonials</h1>
          <div className='testimonials'>
            {Testimonials.map(Testimonial => (
              <div className='rating'>
                <div className='start-rating'>
                  <img className='star' src={star} />
                  <img className='star' src={star} />
                  <img className='star' src={star} />
                  <img className='star' src={star} />
                  <img className='star' src={star} />
                </div>
                <div className='guest'>
                  <img src={Testimonial.img} />
                  <span>{Testimonial.name}</span>
                </div>
                <p>{Testimonial.review}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    )
  }
}
