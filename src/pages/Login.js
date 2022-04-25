import './style.css'
import blog from '../assets/blog.png'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/AuthContext';


const Login=()=>{
    
   const [input, setInput] = useState({
       email: '',
       password: '',
   })
   const [error, setError] = useState('')
   const {user, login} = useUserAuth()
   let navigate = useNavigate()

 const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }


  
  const handleSubmit = async (e) => {
       e.preventDefault()
      try{
        await login(input.email, input.password)
        setError('')
        navigate('/dashboard')
      }catch(err){
        setError(err.message)
      }   
   }
    
 
    return(
        
        <div className="login" >
            
                
            <form id="form" className="login-form" onSubmit={handleSubmit}>
                <img className='blog' src={blog} alt={blog}/>
                 <h2 style={{color:'teal'}}> Login </h2>
  
                 <input className='login-input'type="email" placeholder="Email" name='email' onChange={handleChange}/>
                 <input className='login-input'type="password" placeholder="Password" name='password' onChange={handleChange}/>  

                
                 <button className="login-btn" >Login</button>
                 <p style={{color:'red'}}>{error}</p>
             </form>
        
        </div>
    )
        
    
}

export default Login;



