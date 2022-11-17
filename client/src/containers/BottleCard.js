import React from 'react'

const BottleCard = ({bottle, handleDelete, handleEdit} ) => {
  return (
    <div>
    <h4>{bottle.title}</h4>
    {/* <li>{winery.name}</li> */}
     <li>{bottle.wine_type}</li>
     <li>{bottle.grape_variety}</li>
     <li>{bottle.vintage}</li>
     
     {/* <button>Buy for your wine collection</button> */}
     <button onClick={() => handleEdit(bottle.id)}>Edit Bottle</button>
     <button onClick={() => handleDelete(bottle.id)}>Delete Bottle</button>
    </div>
  )
}

export default BottleCard
