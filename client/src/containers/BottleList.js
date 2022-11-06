import React from 'react'
import BottleCard from "./BottleCard"

const BottleList = ( {bottles} ) => {
    const bottleCards = bottles.map((bottle, index) => <BottleCard key={index} bottle={bottle}/>)
  return (
    <div>
        <h1> Bottle List</h1>
      {bottleCards}
    </div>
  )
}

export default BottleList
