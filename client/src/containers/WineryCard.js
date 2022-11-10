import React from 'react'
import { useHistory} from 'react-router-dom'

const WineryCard = ( {winery} ) => {
  //add bottles button
  const history=useHistory()

  return (
    <div>
      <li>{winery.name} </li>
     {/* <button onClick={() => history.push("/bottles")}> View bottles from this winery</button> */}
    </div>
  )
}

export default WineryCard
