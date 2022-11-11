import React from 'react'
import {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useHistory} from 'react-router-dom'
import BottleCard from './BottleCard'

const BottleDetail = () => {
    const [bottle, setBottle]=useState({})
    const {id}=useParams()
    // const history=useHistory()

    useEffect( ()=> {
            fetch(`/bottles/${id}`)
              .then(resp => resp.json())
              .then(bottle => setBottle(bottle))
          },[id])

    //       const handleDelete = (id) => {
    //         fetch(`/bottles/${params.id}`, 
    //         {method: "DELETE",
    //         headers: {'Content-Type': 'application/json'}
    //         } )
        
    //         removeBottle( params.id );
            
    //       }

  return (
    <div>
      <h1>Bottle Detail</h1>
      <BottleCard bottle={bottle} />
    </div>
  )
}

export default BottleDetail
