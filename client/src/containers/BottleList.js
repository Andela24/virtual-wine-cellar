import React from 'react'
import BottleCard from "./BottleCard"
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const BottleList = ( {bottles, removeBottle} ) => {
  const [bottle, setBottle]=useState('')
  const {id}=useParams()
  const history=useHistory()
 
  // useEffect( ()=> {
  //   fetch(`/bottles/${id}`)
  //     .then(resp => resp.json())
  //     .then(bottle => setBottle(bottle))
  // },[id])

  const handleDelete = id => {
    fetch(`/bottles/${id}`, 
    {method: "DELETE"} )

    removeBottle( id );
    history.push('/bottles')
  }

   const bottleCards = bottles.map((bottle, index) => <BottleCard key={index} bottle={bottle} handleDelete={handleDelete}/>)
  return (
    <div>
        <h1> My Bottle List</h1>
       {/* <button onClick={(e)=>history.push('/bottles/new') }>Add new bottle</button> */}
      {bottleCards}
    </div>
  )
}

export default BottleList
