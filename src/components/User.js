import React from 'react'

const User = ({name,email,password}) => {
  return (
    <ul className='user'>
        <li className='user__li'>
            <p className='user__p'>{name}</p>
            <p className='user__p'>{email}</p>
            <p className='user__p'>{password}</p>
        </li>
    </ul>
  )
}

export default User;