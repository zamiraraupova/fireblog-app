import { set } from 'firebase/database';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import { useUserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import cw from '../assets/cw.jpeg';
import './style.css'


function Navbar() {

  const [dropdown, setDropdown] = useState(false)
  const {user, logout} = useUserAuth()
  const navigate = useNavigate()
  // const [show, setShow] = useState(false)

  const handleClick = () =>{
    setDropdown(!dropdown)
    
  }
  const handleLogOut = async () => {
    try {
        await logout()
        navigate("/dashboard")
    } catch (err) {
        console.log(err.message)
    }
}
  // console.log(dropdown)
  return (
    <nav>
        
        <ul>
            <li ><Link to="/dashboard" ><img src={cw} alt={cw}/></Link></li>
        </ul>  
        
        <ul >  
        
        <FaUserAlt onClick={handleClick} className='user-icon'style={{}}/> 
        {user?.email ? (
         <div className={dropdown ? 'clicked' : 'menu'}
         onClick={handleClick}>
       <li><Link to="/profile"> Profile </Link> </li>
        <li><Link to="/new-blog">New Blog</Link></li>
        <li><Link to="/logout" onClick={handleLogOut}>Logout</Link></li> 
    </div>
        ) : (
      
          <div className={dropdown ? 'clicked' : 'menu'}
          onClick={handleClick}>
      <Link  to="/login" style={{textDecoration: 'none', color: 'black'}} > Login </Link>
      <Link  to="/register" style={{textDecoration: 'none', color: 'black'}} > Register  </Link>
    </div>
         )   
        }   
            {/* <li><Link to="/about"> </Link></li>
            <li><Link to="/details"> </Link> </li>        
           
            <li><Link to="/register"></Link></li>
            <li><Link to="/updateblog"> </Link> </li> */}
               
        </ul>
        
    </nav>
  )
}

export default Navbar