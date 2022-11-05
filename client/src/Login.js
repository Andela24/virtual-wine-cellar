import React, { useState } from 'react'
import { login } from './Actions/auth'
import { useHistory } from 'react-router-dom'

const Login = ({ handleCurrentUser }) => {
  const history = useHistory()
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

    login(state, handleCurrentUser)
    history.push("/")
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" value={ state.username } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={ state.password } onChange={ handleChange } />
        </div><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login