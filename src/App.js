import { useState } from "react";
// import Header from './Component/Header';
// import Hero from './Component/Hero'
import  Header from './Header';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Router/Contact'
import  Home from './Router/Home'
import About from './Router/About'

function App(){
return(
   <div>
   <Router>
      <Header/>
      <Routes>

         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
      </Routes>







   </Router>












{/* 
    <Header />
    <Hero/> */}

   </div>

);


}

export default App;