import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import NewBlog from './pages/NewBlog';

import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/newblog' element ={<NewBlog/>}/>

        
        {/* <Route path='/about' element ={<About/>}/>
       
        <Route path='/details' element ={<Details/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
