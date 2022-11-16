import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddBottle = ({ onAddBottle, wineryId, currentUser }) => {
    // Create the bottle from that particular winery. 
    // Not from the bottle page. So it has to go through the winery.
    //  It needs the winery ID for create the bottle.
    //  So it goes to the winery/grabs the id/ then creates a bottle.
    // So put the fetch and everything on that page from the bottle detail page.

    const [form, setForm]= useState({
        title: '',
        wine_type: '',
        grape_variety: '',
        vintage: '',
        winery_id: wineryId,
        user_id: currentUser.id
    })
    // const {winery_id}=useParams()
    console.log(form)

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
                history.push('/userPage')
          }
        })

        // .then(resp=> resp.json())
        // .then(bottle => onAddBottle(bottle))
        // history.push('/bottles')
    }


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