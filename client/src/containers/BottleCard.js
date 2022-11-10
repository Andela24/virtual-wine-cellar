import React from 'react'

const BottleCard = ({bottle} ) => {
  return (
    <div>
    <h4>{bottle.title}</h4>
    <button>Buy for your wine collection</button>
     {/* <li>{bottle.brand}</li> */}
     <li>{bottle.wine_type}</li>
     <li>{bottle.grape_variety}</li>
     <li>{bottle.vintage}</li>
    </div>
  )
}

export default BottleCard
