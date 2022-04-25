import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blog from '../assets/blog.png'
import Dashboard from './Dashboard'

function NewBlog() {
    let navigate = useNavigate()
    
    const [input, setInput] = useState({
      title:'',
      imgUrl:'',
      context:''
    })
   
    const [newInput, setNewInput] = useState([])
    
    const handleChangle =(e)=>{
      setInput({...input, [e.target.name]: e.target.value} )
    }

    const NewBlogSubmit=(e)=>{
      e.preventDefault()
      //console.log(input)
      addInput(input)
      // setInput({  title:'', imgUrl:'', context:''})
      // navigate('/dashboard')
      

  }
  
  const addInput = (item) =>{
    setNewInput([...newInput, item])
  }

  console.log(input)
  console.log(newInput)
  return (
    <div className='new-blog'>
       
        <div className='blog-log'>
        <img className='blog' src={blog} alt={blog}/>
        </div>
        
        <h2>New Blog</h2>

        <form className="blog-form" onSubmit={NewBlogSubmit}>
            <input className='blog-input' type='text' name='title' placeholder='Title *' onChange={handleChangle} />
            <input className='blog-input' type='text' name='imgUrl' placeholder='Image URL *' onChange={handleChangle} />
            <textarea className='blog-input' id="comments" name="context" cols="50" rows="10" placeholder='Content *' onChange={handleChangle} />

            <button className='blog-btn'>Submit</button>
        </form>

           <Dashboard addInput={addInput} newInput={newInput}/>
    </div>
  )
}

export default NewBlog