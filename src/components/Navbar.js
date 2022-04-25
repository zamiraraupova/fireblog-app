import { set } from 'firebase/database';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import cw from '../assets/cw.jpeg';
import './style.css'


function Navbar() {

  const [dropdown, setDropdown] = useState(false)
  // const [show, setShow] = useState(false)

  const handleClick = () =>{
    setDropdown(!dropdown)
    
  }

  // console.log(dropdown)
  return (
    <nav>
        
        <ul>
            <li ><Link to="/dashboard" ><img src={cw} alt={cw}/></Link></li>
        </ul>  
        
        <ul >  
        
        <button onClick={handleClick}  >icon</button> 

        <div className={dropdown ? 'clicked' : 'menu'}
              onClick={handleClick}>
          <Link  to="/login" style={{textDecoration: 'none', color: 'black'}} > Login </Link>
          <Link  to="/register" style={{textDecoration: 'none', color: 'black'}} > Register  </Link>
        </div>
        
        <div className={dropdown ? 'clicked' : 'menu'}
              onClick={handleClick}>
            <li><Link to="/profile"> Profile </Link> </li>
             <li><Link to="/newblog">New Blog</Link></li>
             <li><Link to="/logout">Logout</Link></li> 
         </div>
            
            
            {/* <li><Link to="/about"> </Link></li>
            <li><Link to="/details"> </Link> </li>        
           
            <li><Link to="/register"></Link></li>
            <li><Link to="/updateblog"> </Link> </li> */}
               
        </ul>
        
    </nav>
  )
}

export default Navbar