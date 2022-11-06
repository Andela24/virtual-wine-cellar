// list all of wineries

import React from 'react'
import WineryCard from './WineryCard'

const ListWineries = ({ wineries}) => {
const wineryCards = wineries.map((winery, index) => <WineryCard key={index} winery={winery}/>)
  return (
    <div>
      <h1> Winery list</h1>
      {wineryCards}
    </div>
  )
}

export default ListWineries
