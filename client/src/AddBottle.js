import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const AddBottle = ({ onAddBottle }) => {

    const [form, setForm]= useState({
        title: '',
        wine_type: '',
        grape_variety: '',
        vintage: '',
    })
    const {winery_id}=useParams()

    const history=useHistory()


    const handleChange = (e) => {
        setForm({...form, 
       [e.target.name]:e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        fetch('/bottles', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(form)
             
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(onAddBottle)  
                history.push('/bottles')
          }
        })

        // .then(resp=> resp.json())
        // .then(bottle => onAddBottle(bottle))
        // history.push('/bottles')
    }



    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     if(!title) {
    //         alert('Please add a title.')
    //         return
    //     }

    //     // onAddWinery({ title, vintage, type, grape})

    //     setTitle('')
    //     setVintage('')
    //     setType('')
    //     setGrape('')
    // }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title </label>
                <input type='text' 
                placeholder='Add Title' 
                name = 'title'
                value={form.title} 
                onChange={handleChange} />
            </div>
        
            <div className='form-control'>
                <label>Type of Wine</label>
                <input type='text' 
                placeholder='Add Type'
                name = 'wine_type'
                value={form.wine_type} 
                onChange={handleChange}/>
            </div>
           
            
            <div className='form-control'>
                <label>Grape Variety</label>
                <input type='text' 
                placeholder='Add Grape Variety'
                name='grape_variety'
                value={form.grape_variety} 
                onChange={handleChange}/>
            </div>
            <div className='form-control'>
                <label>Vintage</label>
                <input type='text' 
                placeholder='Add Vintage' 
                name= 'vintage'
                value={form.vintage} 
                onChange={handleChange}/>
            </div>

            <input type='submit' value='Submit' />
        </form>
    )
}

export default AddBottle