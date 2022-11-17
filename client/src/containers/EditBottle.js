import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const EditBottle = ( {currentUser, wineryId, updateBottle}) => {
  const [form, setForm]= useState({
    title: '',
    wine_type: '',
    grape_variety: '',
    vintage: ''
})

    const history=useHistory()
    const {id}=useParams()

    // console.log(form)

    useEffect(() => {
        fetch(`/bottles/${id}`)
        .then(res => res.json())
        .then(setForm)
      },[id])

      const handleChange = (e) => {
        setForm({...form, 
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
        body: JSON.stringify(form)
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
        name = 'title'
        value={form.title} 
        onChange={handleChange} />
    </div>

    <div className='form-control'>
        <label>Type of Wine</label>
        <input type='text' 
        name = 'wine_type'
        value={form.wine_type} 
        onChange={handleChange}/>
    </div>
   
    
    <div className='form-control'>
        <label>Grape Variety</label>
        <input type='text' 
        name='grape_variety'
        value={form.grape_variety} 
        onChange={handleChange}/>
    </div>
    <div className='form-control'>
        <label>Vintage</label>
        <input type='text'  
        name= 'vintage'
        value={form.vintage} 
        onChange={handleChange}/>
    </div>

    <input type='submit' value='Submit' />
</form>
)
}

export default EditBottle
