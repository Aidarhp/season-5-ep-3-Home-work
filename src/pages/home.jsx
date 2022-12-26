import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../store/action/user'

const Home = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })


  const inputHandler = (event) => {
    const {name, value} = event.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      }
    })
  }

  const dispatch = useDispatch()
  const addUser = () => {
    dispatch(userActions.addUser(user))
    setUser({
      name: "",
      email: "",
      password: ""
    })
  }


  return (
    <div className='container'>
        <h1 className='container__title'>Add User</h1>
          <input className='container__input'
          type="text" 
          name='name' 
          placeholder='enter a name' 
          onChange={inputHandler} 
          value={user.name}
          required/>
          <input className='container__input' 
          type='email'
          name='email' 
          placeholder='enter a email' 
          onChange={inputHandler} 
          value={user.email}
          required/>
          <input className='container__input'
          name='password' 
          type='password' 
          placeholder='enter password' 
          onChange={inputHandler} 
          value={user.password}/>
          <button className='container__btn' type='submit' onClick={addUser}>Add user</button>
      <Link className='container__a' to='./users'>User list</Link>
    </div>
  )
}

export default Home;