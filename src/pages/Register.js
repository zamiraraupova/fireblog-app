import './style.css'
import blog from '../assets/blog.png'

import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/AuthContext'

function Register(){
    
   const [input, setInput] = useState({
       email: '',
       password: '',
       error: ''
   })
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")
    const { register } = useUserAuth()
    let navigate = useNavigate()


 
   const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  // const handleChangeEmail = (e)=>{
  //   setEmail(e.target.value)
  // }
  
  // const handleChangePassword = (e)=>{
  //   setPassword(e.target.value)
  // }

   const handleRegister = async (e) => {
    e.preventDefault();
        try{
          await register(input.email, input.password)
          setInput(input.error === '')
          navigate('/dashboard')
        }catch(err){
          setInput(err.message)
        }
   }

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//         await register(email, password)
//         setError("")
//         navigate("/dashboard")

//     } catch (err) {
//         setError(err.message)

//     }
// }
    
    return(
        
        <div className="login" >
            
                
            <form id="form" className="login-form" onSubmit={handleRegister}>
                <img className='blog' src={blog} alt={blog}/>
                 <h2 style={{color:'teal'}}> Register </h2>
                  
                  {input.error}
                 
                 <input className='login-input'type="email" placeholder="Email" name='email' onChange={handleChange}/>
                 <input className='login-input'type="password" placeholder="Password" name='password' onChange={handleChange}/>  

                
                 <button className="login-btn" >Register</button>
      
             </form>
        
        </div>
    )
        
    
}

export default Register;



