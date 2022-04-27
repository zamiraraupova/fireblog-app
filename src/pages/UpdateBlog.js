import React from 'react'
import { useNavigate } from 'react-router-dom'
import blog from '../assets/blog.png'
import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database"
import firebase from '../helpers/firebase';

function UpdateBlog({input, setInput, newInput, setNewInput}) {

        let navigate = useNavigate()
     
        const handleChangle =(e)=>{
          setInput({...input, [e.target.name]: e.target.value} )
        }
    
        const UpdateBlogSubmit=(e)=>{
          e.preventDefault()
          //console.log(input)
        if(input.id){
          const db = getDatabase(firebase);
          const useRef = ref(db, 'data/' + input.id);
          update(useRef, {title: input.title, imgUrl: input.imgUrl, context: input.title})
        }else{
          const db = getDatabase(firebase);
          const userRef = ref(db, 'data')
          set(push(userRef), input)
        }
        setNewInput([...newInput, input])
          navigate('/dashboard')
      }
     
    return (
        <div className='new-blog'>

            <div className='blog-log'>
                <img className='blog' src={blog} alt={blog} />
            </div>

            <h2>Update Blog</h2>

            <form className="blog-form" onSubmit={UpdateBlogSubmit}>
                <input className='blog-input' type='text' name='title' placeholder='Title *' onChange={handleChangle} value={input.title} />
                <input className='blog-input' type='text' name='imgUrl' placeholder='Image URL *' onChange={handleChangle} value={input.imgUrl} />
                <textarea className='blog-input' id="comments" name="context" cols="50" rows="10" placeholder='Content *' onChange={handleChangle} value={input.context} />

                <button className='blog-btn'>Update</button>
            </form>


        </div>
    )
}

export default UpdateBlog