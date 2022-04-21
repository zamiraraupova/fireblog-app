import './style.css'
import blog from '../assets/blog.png'

import { useState, useEffect } from 'react';
import firebase from '../helpers/firebase'
import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database"
import { useNavigate } from 'react-router-dom';


function Register(){
    
   const [alert, setAlert] = useState('')
   const [input, setInput] = useState({
       email: '',
       password: '',
   })
   
   const [inputList, setInputList] = useState([]);

   let navigate = useNavigate()

 const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }


  
  const handleSubmit=(e)=>{
       e.preventDefault()
       //if(input.email && input.password){
         navigate('/dashboard')
       //}
          //else setAlert('Please enter your credentials')

        if(input.id){
        const db = getDatabase(firebase);
        const userRef = ref(db, "login/" + input.id);
        update(userRef, {email: input.email, password: input.password})
       } else {
        const db = getDatabase(firebase);
        const userRef = ref(db, "login");
        set(push(userRef), input);
      }
        
   }

   useEffect(()=>{
    const db = getDatabase(firebase);
    const userRef = ref(db, "login");
    onValue(query(userRef), (snapshot) => {
      const inputs = snapshot.val();
      const inputArray = [];
      for (let id in inputs) {
        inputArray.push({id, ...inputs[id]})
      }
      setInputList(inputArray);
    })
  },[])
    
    

    
    
    return(
        
        <div className="login" >
            
                
            <form id="form" className="login-form" onSubmit={handleSubmit}>
                <img className='blog' src={blog} alt={blog}/>
                 <h2 style={{color:'teal'}}> Register </h2>
  
                 <input className='login-input'type="email" placeholder="Email" name='email' value={input.email} onChange={handleChange}/>
                 <input className='login-input'type="password" placeholder="Password" name='password' value={input.password} onChange={handleChange}/>  

                
                 <button className="login-btn" onClick={()=> setInput({email:'', password:''})}>Register</button>
                 <p style={{color:'red'}}>{alert}</p>
             </form>
        
        </div>
    )
        
    
}

export default Register;



