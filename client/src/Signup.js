import React, { useState } from 'react'
import { createAccount } from './Actions/auth'
import { useHistory } from 'react-router-dom'

const Signup = ({ handleCurrentUser }) => {
  const history=useHistory()
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    createAccount(state, handleCurrentUser)
    history.push("/")
  }

  return (
    <div>
      <h1>Create a new account</h1>
      <form className="form" onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" value={ state.username } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={ state.password } onChange={ handleChange } />
        </div><br />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  )
}

export default Signup