import userEvent from '@testing-library/user-event'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/AuthContext'

function Profile() {
  const {user, logout} = useUserAuth()
  const navigate = useNavigate()

  
  return (
    <div className='profile'>
        <div>
            <image src='' alt=''/>
        </div>

       <div >
            <label for="usename">Display Name</label>
            <h3>Not found</h3>

            <label for="email"> Email</label>
            <h3>{user.email}</h3>


        </div>

    </div>
  )
}

export default Profile