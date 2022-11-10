// list all of wineries

import React from 'react'
import WineryCard from './WineryCard'
import {useHistory} from 'react-router-dom'

const ListWineries = ({ wineries}) => {
    const history = useHistory()
const wineryCards = wineries.map((winery, index) => <WineryCard key={index} winery={winery}/>)  
return (
    <div>
      <h1> Winery list</h1> 
      <button onClick={()=>history.push('/wineries/new')}>Add Winery</button>
      {wineryCards}
    </div>
  )
}

export default ListWineries
