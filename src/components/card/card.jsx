import React from 'react'

function Card({Data}) {
  return (
    <div className="card bg-white shadow-2xl  h-90">
        
        

            
            <h1>{Data.id}</h1>
        <p>{Data.title}</p>
        <p>{Data.description}</p>

        
    </div>
  )
}

export default Card