import './style.css'
import blog from '../assets/blog.png'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    
  //  const [alert, setAlert] = useState('')
   const [input, setInput] = useState({
       email: '',
       password: '',
   })
   
  //  const [inputList, setInputList] = useState([]);

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
        
   }
    
 
    return(
        
        <div className="login" >
            
                
            <form id="form" className="login-form" onSubmit={handleSubmit}>
                <img className='blog' src={blog} alt={blog}/>
                 <h2 style={{color:'teal'}}> Login </h2>
  
                 <input className='login-input'type="email" placeholder="Email" name='email' onChange={handleChange}/>
                 <input className='login-input'type="password" placeholder="Password" name='password' onChange={handleChange}/>  

                
                 <button className="login-btn" onClick={()=> setInput({email:'', password:''})}>Login</button>
                 <p style={{color:'red'}}>{alert}</p>
             </form>
        
        </div>
    )
        
    
}

export default Login;



