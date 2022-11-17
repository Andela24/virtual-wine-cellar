import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const EditBottle = ( {currentUser, wineryId, updateBottle}) => {
    const [formData, setFormData]= useState({
        title: '',
        wine_type: '',
        grape_variety: '',
        vintage: '',
        winery_id: wineryId,
        user_id: currentUser.id,
    })

    const history=useHistory()
    const {id}=useParams()

    console.log(formData)

    useEffect(() => {
        fetch(`/bottles/${id}`)
        .then(res => res.json())
        .then(setFormData)
      },[])

      const handleChange = (e) => {
        setFormData({...formData, 
       [e.target.name]:e.target.value })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`/bottles/${id}`, {
        method:'PATCH',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(resp => {
        if(resp.ok){
        resp.json().then(updateBottle)
        history.push(`/bottles/${id}`)
      }
    })
  
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <h1>Update Bottle</h1>
        <label>Title </label>
        <input type='text' 
        placeholder='Add Title' 
        name = 'title'
        value={formData.title} 
        onChange={handleChange} />
    </div>

    <div className='form-control'>
        <label>Type of Wine</label>
        <input type='text' 
        placeholder='Add Type'
        name = 'wine_type'
        value={formData.wine_type} 
        onChange={handleChange}/>
    </div>
   
    
    <div className='form-control'>
        <label>Grape Variety</label>
        <input type='text' 
        placeholder='Add Grape Variety'
        name='grape_variety'
        value={formData.grape_variety} 
        onChange={handleChange}/>
    </div>
    <div className='form-control'>
        <label>Vintage</label>
        <input type='text' 
        placeholder='Add Vintage' 
        name= 'vintage'
        value={formData.vintage} 
        onChange={handleChange}/>
    </div>

    <input type='submit' value='Submit' />
</form>
)
}

export default EditBottle
