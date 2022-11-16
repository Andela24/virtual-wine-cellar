// list all of wineries

import React, { useState } from 'react'
import WineryCard from './WineryCard'
import {useHistory} from 'react-router-dom'
import AddBottle from '../AddBottle'


const ListWineries = ({ wineries, currentUser}) => {
  const [wineryId, setWineryId] = useState(null)
  const history = useHistory()
const wineryCards = wineries.map((winery, index) => <WineryCard key={index} winery={winery} setWineryId={setWineryId} currentUser={currentUser}/>) 
if (!wineryId) {
return (
    <div>
      <h1> Winery list</h1> 
      <button onClick={()=>history.push('/wineries/new')}>Add Winery</button>
      {wineryCards}
    </div>
  )
}
else {
return (
  <div>
   <AddBottle wineryId={wineryId} currentUser={currentUser}/>
  </div>
)
}
}



export default ListWineries
