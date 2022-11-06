import React from 'react'

const BottleCard = ({bottle} ) => {
  return (
    <div>
     <h1>bottles </h1>
     <li>{bottle.title}</li>
    </div>
  )
}

export default BottleCard
