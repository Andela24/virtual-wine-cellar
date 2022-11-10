import React from 'react'
import { useState } from 'react'
import { useHistory} from 'react-router-dom'

const AddWinery = ({onAddWinery}) => {
    const [name, setName]=useState({})
    const history=useHistory()

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/wineries', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({name: name})
             
        })
        .then(resp=> resp.json())
        .then(name => onAddWinery(name))
        history.push('/wineries')
    }
    
  return (
    <div>
      <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
                <label>Name </label>
                <input type='text' 
                placeholder='Add Name' 
                name = 'name'
                value={name.name} 
                onChange={handleChange} />
            </div>
            <input type='submit' value='Submit' />
            </form>
    </div>
    
  )
}

export default AddWinery
