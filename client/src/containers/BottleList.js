import React from 'react'
import BottleCard from "./BottleCard"
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'


const BottleList = ( {bottles} ) => {
  const history=useHistory()
  const [bottle, setBottle]=useState({})

useEffect( ()=> {
    fetch('/bottles')
      .then(resp => resp.json())
      .then(bottle => console.log(bottle))
  },[])

  const deleteBottle = async (e, id) => {
    e.preventDefault();
    fetch(`/bottles/:{params.id}`, 
    {method: "DELETE"} )

    removeBottle( id );
    
  }
const removeBottle = id => {
  setBottle(bottles.filter( bottles => bottles.id !== id))
  
}

    const bottleCards = bottles.map((bottle, index) => <BottleCard key={index} bottle={bottle} deleteBottle={deleteBottle}/>)
  return (
    <div>
        <h1> Bottle List</h1>
        <button onClick={() => history.push('/bottles/new')}>Add New Bottle</button>
        <button onClick={(e) => deleteBottle(e, bottle.id)}> Delete Bottle</button>
      {bottleCards}
    </div>
  )
}

export default BottleList
