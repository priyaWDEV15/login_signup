import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/login/Register";
import Login from "./components/login/Login";

function App() {
  return (
   <Router>
     <Routes>
       <Route exact path='/' element ={<Login/>}/>
       <Route exact path='/register' element ={<Register/>}/>
      </Routes>
   </Router>
  )
}

export default App
