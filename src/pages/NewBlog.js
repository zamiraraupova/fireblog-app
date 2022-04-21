import React from 'react'
import blog from '../assets/blog.png'

function NewBlog() {

    const NewBlogSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='new-blog'>
       
        <div className='blog-log'>
        <img className='blog' src={blog} alt={blog}/>
        </div>
        
        <h2>New Blog</h2>

        <form className="blog-form" onSubmit={NewBlogSubmit}>
            <input className='blog-input' type='text' placeholder='Title *'/>
            <input className='blog-input' type='text' placeholder='Image URL *'/>
            <textarea className='blog-input' id="comments" name="" cols="50" rows="10" placeholder='Content *'/>

            <button className='blog-btn'>Submit</button>
        </form>

    </div>
  )
}

export default NewBlog