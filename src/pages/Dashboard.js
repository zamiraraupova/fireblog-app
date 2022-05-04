import { useEffect, useState } from 'react';
import React from 'react'
import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database"
import firebase from '../helpers/firebase';
import { useUserAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaRegCommentAlt } from 'react-icons/fa'
// get data from firebase realtime database

function Dashboard({input, setInput, newInput, setNewInput }) {
  // console.log(newInput)
  const { user } = useUserAuth()
  const [count, setCount] = useState(0)
  const [countComments, setCountComments] = useState(0)

  let navigate = useNavigate()

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "data");
    onValue(query(userRef), (snapshot) => {
      const inputs = snapshot.val();
      // console.log(inputs, '<<<')
      const inputArray = [];
      for (let id in inputs) {
        // console.log(id, '<<<<')

        inputArray.push({ id, ...inputs[id] })
      }
      setNewInput(inputArray);
    })
  }, [])

  const heartCount = () => {
    setCount(count + 1)
  }
  const commentsCount = () => {
    setCountComments(count + 1)
  }
  
  return (
    <div className='dashboard'>
      <div className='logo'><h1>Dashboard</h1></div>
      
      <div className='card-container'>
        {newInput.map(i =>
          <div className='card' onClick={()=>navigate('/details', {state:{card: i.id}})} key={i.id}>
            <img src={i.imgUrl} className='card-img' />
            <div className='card-name'>{i.title}</div>
            <div className='card-text'>{i.context}</div>
            <div> user.email </div>
          
          <div className='likes'>      
             <span onChange={heartCount} > <FaRegHeart /> {count}</span>
             <span onChange={commentsCount} style={{marginRight: '5px'}}> <FaRegCommentAlt />{countComments}</span>
          </div>
          
          </div>)}
          
      </div> 
    
    
    </div>
  )
}

export default Dashboard