import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from "../App"
import Main from './Main'
import Navbar from './Navbar'
import Signin from './Signin'
import Signup from './Signup'



function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/signin/:m" element={<Signin/>}/>
        <Route exact path="/main" element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default Routing
