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
    //console.log(cardId)

    const heartCount = () => {
        setCount(count + 1)
      }

      const handleDelete = (id) => {
        const db = getDatabase(firebase);
        const userRef = ref(db, "data/" + id);
        remove(userRef);
        //console.log(userRef)
        //console.log(id)
      }
    
      const handleUpdate = (id, title, imgUrl, context) => {
        setInput({
          id, title, imgUrl, context
        })
        navigate('/update-blog') 
      }

      const filteredCardData = newInput.filter(item => item.id === cardId)[0]
  
      //console.log(filteredCardData)
  return (
    <div className='details'>
        
        <div className='detail-card'>
          <img src={filteredCardData.imgUrl} className='detail-card-img' />
          <div className='detail-card-name'>{filteredCardData.title}</div> 
          <div className='detail-card-text'>{filteredCardData.context}</div>
        
         <span onChange={heartCount}><FaRegHeart /> {count}</span>
        <span><FaRegCommentAlt /></span>
           
        </div>

        <div className='detail-buttons'>
          <button className='update-btn' onClick={() => { handleUpdate(filteredCardData.id, filteredCardData.title, filteredCardData.imgUrl, filteredCardData.context )}}>Update</button>  
          <button className='delete-btn' onClick={() => { handleDelete(filteredCardData.id)}}>Delete</button>
        </div>
    </div>
  )
}

export default Details