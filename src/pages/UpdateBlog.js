import React from 'react'
import { useEffect} from 'react';

import { useNavigate } from 'react-router-dom'
import blog from '../assets/blog.png'
import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database"
import firebase from '../helpers/firebase';

function UpdateBlog({input, setInput, newInput, setNewInput}) {

        let navigate = useNavigate()
     
        const handleChange =(e) => {
          setInput({...input, [e.target.name]: e.target.value} )
        }
    
        // function updateBlog(id, data) {
        //     const db = getDatabase();
        //     // const newUserKey=push(child(ref(db),"blogs/")).key;
        //     const updates={};
        //     updates["data/"+ input.id] = data;
        //     return update(ref(db),updates)
        //   }

        const UpdateBlogSubmit=(e, data)=>{
          e.preventDefault()
          //console.log(input)
          
         if(input.id){
          const db = getDatabase(firebase);
          const updates={};
          updates["data/"+ input.id] = data;
          update(ref(db),updates)
        }else{
          const db = getDatabase(firebase);
          const userRef = ref(db, 'data')
          set(push(userRef), input)
          console.log(userRef)
        }
        // if(input.id){
        //   const db = getDatabase(firebase);
        //   const useRef = ref(db, 'data/' + input.id);
        //   update(useRef, {title: input.title, imgUrl: input.imgUrl, context: input.title})
        // }else{
        //   const db = getDatabase(firebase);
        //   const userRef = ref(db, 'data')
        //   set(push(userRef), input)
        //   //console.log(userRef)
        //}
          navigate('/dashboard')
      }
      //console.log(input)

    //   useEffect(() => {
    //     const db = getDatabase(firebase);
    //     const userRef = ref(db, "data");
    //     onValue(query(userRef), (snapshot) => {
    //       const inputs = snapshot.val();
    //       // console.log(inputs, '<<<')
    //       const inputArray = [];
    //       for (let id in inputs) {
    //         // console.log(id, '<<<<')
    
    //         inputArray.push({ id, ...inputs[id] })
    //       }
    //       setNewInput(inputArray);
    //     })
    //   }, [])
    return (
        <div className='new-blog'>

            <div className='blog-log'>
                <img className='blog' src={blog} alt={blog} />
            </div>

            <h2>Update Blog</h2>

            <form className="blog-form" onSubmit={UpdateBlogSubmit}>
                <input className='blog-input' type='text' name='title' placeholder='Title *' onChange={handleChange} value={input.title} />
                <input className='blog-input' type='text' name='imgUrl' placeholder='Image URL *' onChange={handleChange} value={input.imgUrl} />
                <textarea className='blog-input' id="comments" name="context" cols="50" rows="10" placeholder='Content *' onChange={handleChange} value={input.context} />

                <button className='blog-btn'>Update</button>
            </form>


        </div>
    )
}

export default UpdateBlog