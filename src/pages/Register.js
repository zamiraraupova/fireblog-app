import './style.css'
import blog from '../assets/blog.png'

import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/AuthContext'

function Register(){
    
  //  const [input, setInput] = useState({
  //      email: '',
  //      password: '',
  //      error: ''
  //  })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { register } = useUserAuth()
    let navigate = useNavigate()


 
  //  const handleChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value })
  // }

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  
  const handleChangePassword = (e)=>{
    setPassword(e.target.value)
  }

  //  const handleRegister = async () => {
  //       try{
  //         await signUp(input.email, input.password)
  //         setInput(input.error === '')
  //         navigate('/')
  //       }catch(err){
  //         setInput(err.message)
  //       }
  //  }

  const handleSignUp = async () => {
    try {
        await register(email, password)
        setError("")
        navigate("/dashboard")

    } catch (err) {
        setError(err.message)

    }
}
    
    return(
        
        <div className="login" >
            
                
            <form id="form" className="login-form" onSubmit={handleSignUp}>
                <img className='blog' src={blog} alt={blog}/>
                 <h2 style={{color:'teal'}}> Register </h2>
                  
                  {error}
                 
                 <input className='login-input'type="email" placeholder="Email" name='email' onChange={handleChangeEmail}/>
                 <input className='login-input'type="password" placeholder="Password" name='password' onChange={handleChangePassword}/>  

                
                 <button className="login-btn" >Register</button>
      
             </form>
        
        </div>
    )
        
    
}

export default Register;



