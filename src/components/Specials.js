import React, { Component } from 'react'
import salad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import dessert from '../images/lemon dessert.jpg'

function Specials () {
  const specials = [
    {
      img: salad,
      name: 'Greek Salad',
      price: '$12.99',
      discription: `we are a family owned mediterrnean retaurant focused on
                traditional recipes served with a modern twist`
    },
    {
      img: bruchetta,
      name: 'Bruchetta',
      price: '$5.99',
      discription: `we are a family owned mediterrnean retaurant focused on
                traditional recipes served with a modern twist`
    },
    {
      img: dessert,
      name: 'Lemon Dessert',
      price: '$5.00',
      discription: `we are a family owned mediterrnean retaurant focused on
                traditional recipes served with a modern twist`
    }
  ]

  return (
    <>
      <section id='Specials'>
        <h1>This weeks specials!</h1>
        <div className='specials'>
          {specials.map(special => (
            <div className='card'>
              <img src={special.img} alt='greek salad' />
              <div className='card-container'>
                <h4>
                  <b>{special.name}</b>
                  <b>{special.price}</b>
                </h4>
                <p>{special.discription}</p>
                <span>
                  order a delivery<i></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Specials
