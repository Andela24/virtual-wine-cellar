import React from 'react'
import {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useHistory} from 'react-router-dom'
import BottleCard from './BottleCard'

const BottleDetail = () => {
    const [bottle, setBottle]=useState({})

  return (
    <div>
      <h1>Bottle Detail</h1>
      <BottleCard bottle={bottle} />
    </div>
  )
}

export default BottleDetail
