import React from 'react';

export default function Card(event) {
  return (
    <div className='p-4 text-white rounded-lg shadow-lg max-h-96h-80 w-60 bg-gradient-to-t from-green-900 to-gray-600'>
      <h1 className='mb-2 text-lg font-bold'>{event.title}</h1>
      <img className='object-cover w-full h-40 mb-4 rounded' src={event.img}  />
      <p className='text-sm'>{event.description}</p>
    </div>
  );
}
