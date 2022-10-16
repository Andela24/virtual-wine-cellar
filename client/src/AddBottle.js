import { useState } from 'react'

const AddBottle = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [vintage, setVintage] = useState('')
    const [type, setType] = useState('')
    const [grape, setGrape] = useState('')



    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a product')
            return
        }

        onAdd({ title, vintage, type, grape})

        setTitle('')
        setVintage('')
        setType('')
        setGrape('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Product</label>
                <input type='text' 
                placeholder='Add Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Vintage</label>
                <input type='text' 
                placeholder='Add Vintage' 
                value={vintage} 
                onChange={(e) => setVintage(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Type of Wine</label>
                <input type='text' 
                placeholder='Add Type'
                value={type} 
                onChange={(e) => setType(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Grape Variety</label>
                <input type='text' 
                placeholder='Add Grape Variety'
                value={grape} 
                onChange={(e) => setGrape(e.target.value)}/>
            </div>

            <input type='submit' value='Save Bottle' className='btn btn-block'/>
        </form>
    )
}

export default AddBottle