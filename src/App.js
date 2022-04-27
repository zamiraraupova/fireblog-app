import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import NewBlog from './pages/NewBlog';
import Profile from './pages/Profile';
import Details from './pages/Details';
import { useState } from 'react';
import './App.css';
import UpdateBlog from './pages/UpdateBlog';




function App() {
  const [input, setInput] = useState({
    title:'',
    imgUrl:'',
    context:''
  })
  const [newInput, setNewInput] = useState([])

  return (
    <div className="App">
      <Navbar/>
      
      <Routes>

        <Route path='/dashboard' element={<Dashboard input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput}/>} /> 
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/new-blog' element ={<NewBlog input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput} />}/>
        <Route path='/details' element ={<Details input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput} />}/>
        <Route path='/update-blog' element ={<UpdateBlog input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput} />}/>

        <Route path='/profile' element ={<Profile/>}/>

        {/* <Route path='/about' element ={<About/>}/>
       
        <Route path='/details' element ={<Details/>}/> */}

      </Routes>
      
    </div>
  );
}

export default App;
