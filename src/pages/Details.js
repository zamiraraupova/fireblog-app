import React from 'react'
import { useState } from 'react'
import { FaRegHeart, FaRegCommentAlt } from 'react-icons/fa'
import {  useNavigate, useLocation } from 'react-router-dom'
import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database"
import firebase from '../helpers/firebase';
import { useUserAuth } from '../contexts/AuthContext'

function Details({input, setInput, newInput, setNewInput}) {
    const [count, setCount] = useState(0)

    let navigate = useNavigate()
    let location = useLocation()

    const cardId = location.state['card']
    console.log(cardId)

    const heartCount = () => {
        setCount(count + 1)
      }

      const handleDelete = (id) => {
        const db = getDatabase(firebase);
        const userRef = ref(db, "data/" + id);
        remove(userRef);
      }
    
      const handleUpdate = (id, title, imgUrl, context) => {
        setInput({
          id, title, imgUrl, context
        })
        navigate('/update-blog')
      }

      
  
  return (
    <div className='details'>
        {newInput.map(i=>
        <div className='detail-card'>
          <img src={i.imgUrl} className='detail-card-img' />
          <div className='detail-card-name'>{i.title}</div> 
          <div className='detail-card-text'>{i.context}</div>
        
         <span onChange={heartCount}><FaRegHeart /> {count}</span>
        <span><FaRegCommentAlt /></span>
        </div>)}
     <button onClick={() => { handleUpdate(input.id)}}>Update</button>  
     <button onClick={() => { handleDelete(input.id)}}>Delete</button>
    </div>
  )
}

export default Details