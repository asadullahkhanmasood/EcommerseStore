import React from 'react'

function Card({Data, onAddToCart}) {
  return (
    <div className="card bg-white shadow-2xl h-90">
        <h1 className=''>{Data.id}</h1>
        <p className='text-3xl'>{Data.title}</p>
        <p className='mt-4'>{Data.description}</p>
        <p className='mt-2 text-lg font-bold'>${Data.price}</p>

        <button 
          onClick={() => onAddToCart(Data)}
          className='mt-4 bg-amber-400 w-12 px-3 py-1 rounded hover:bg-amber-500'
        >
          Cart
        </button>
    </div>
  )
}

export default Card