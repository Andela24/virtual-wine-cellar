import React from 'react'

const BottleCard = ({bottle, handleDelete} ) => {
  return (
    <div>
    <h4>{bottle.title}</h4>
     <li>{bottle.wine_type}</li>
     <li>{bottle.grape_variety}</li>
     <li>{bottle.vintage}</li>
     
     <button>Buy for your wine collection</button>
     <button onClick={() => handleDelete(bottle.id)}>Delete</button>
    </div>
  )
}

export default BottleCard
