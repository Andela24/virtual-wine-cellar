import React from 'react'
import BottleCard from "./BottleCard"
import {useHistory} from 'react-router-dom'

const BottleList = ( {bottles} ) => {
  const history=useHistory()
    const bottleCards = bottles.map((bottle, index) => <BottleCard key={index} bottle={bottle}/>)
  return (
    <div>
        <h1> Bottle List</h1>
        <button onClick={() => history.push('/bottles/new')}>Add New Bottle</button>
      {bottleCards}
    </div>
  )
}

export default BottleList
