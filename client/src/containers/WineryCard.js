import React from 'react'

// import { useHistory} from 'react-router-dom'

const WineryCard = ( {winery, setWineryId} ) => {
  //add bottles button
  // const history=useHistory()

  return (
    <div>
      <li>{winery.name} </li>
     
     <button onClick={() => setWineryId(winery.id)}> Add a bottle from this winery</button>
    </div>
  )
}

export default WineryCard
