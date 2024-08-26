import React from 'react'

export default function Card(Card) {
  return (
    <div className='mt-20 h-80 w-60  bg-gradient-to-t from-green-900 to-gray-600 text-white'>
        <h1>{Card.name}</h1>
        <img className='h-40 w-24 bg-cover' src={Card.img}/>
        <p className='justify-around'>{Card.description}</p>
    </div>
  )
}
