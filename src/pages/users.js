import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import User from '../components/User'
import * as userActions from '../store/action/user'

const Users = () => {
    const users = useSelector((state) => {return state.users})
    const dispatch = useDispatch()
    const removeUser = () => {dispatch(userActions.removeUser())}
  return (
    <div className='container-two'>
        {users.map((user) => {
                return <User name={user.name} email={user.email} password={user.password}/>
        })}
        <button className='container__btn' onClick={removeUser}>remove users</button>
        <Link className='container__a' to='/'>Назад</Link>
    </div>
  )
}

export default Users