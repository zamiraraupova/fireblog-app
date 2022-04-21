import { set } from 'firebase/database';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import cw from '../assets/cw.jpeg';
import './style.css'


function Navbar() {

  const [dropdown, setDropdown] = useState(false)
  const [show, setShow] = useState(false)

  const handleClick = () =>{
    // setDropdown(!dropdown)
    setShow(!show)
  }
  return (
    <nav>
        
        <ul className='ul-left' >
            <li ><Link to="/dashboard" ><img src={cw} alt={cw}/></Link></li>
        </ul>  
        <ul className='ul-right'>  
        
        <button onClick={handleClick}>icon</button> 

         <Link to="/login" style={{textDecoration: 'none', color: 'white'}} value={show}> Login </Link>
         <Link to="/register" style={{textDecoration: 'none', color: 'white'}} value={show}> Register  </Link>

            {/* <li><Link to="/about"> </Link></li>
            <li><Link to="/details"> </Link> </li>        
            <li><Link to="/newblog"></Link></li>
            <li><Link to="/profile"> </Link> </li>
            <li><Link to="/register"></Link></li>
            <li><Link to="/updateblog"> </Link> </li> */}
               
        </ul>
        
    </nav>
  )
}

export default Navbar