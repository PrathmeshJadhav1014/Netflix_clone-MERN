import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from './Footer.jsx/Footer'
import axios from 'axios';


function Signup() {

    const[mail, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {
            name,
            mail,
            password
        }
        axios.post("http://localhost:3001/user",obj);
        alert("Account Created Successfully");
        navigate("/signin");
        setEmail("")
        setName("")
        setPassword("")


        console.log(obj);

    
      };
  return (
    <div>
      <header>
        <div class="header_wrap">
            <Navbar/>
            <form onSubmit={submitHandler}>
      {/* {ex && <div className="red">Entered Invalid Data</div>} */}

        <span> Name:</span> <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="input" required />
        <span> Email id:</span> <input type="mail" value={mail} onChange={(e)=>setEmail(e.target.value)} className="input" required />
        <span>Password:</span> <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" required/>
        <div>
        <input type="submit" value="SignUp" className="btn1" />
      </div>
      </form>
        </div>
    </header>
      <Footer/>
    </div>
  );
}

export default Signup;
