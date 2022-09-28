import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer.jsx/Footer'
import axios from 'axios';

function Signin() {
  const{m} = useParams();
  console.log(m);
    const[email, setEmail] = useState(m);
    const[password, setPassword] = useState();
    const [data,setData] = useState();
    const[ex,setex] = useState(false);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get("http://localhost:3001/user")
        .then(async res=>{
          const data = await res.data;
          console.log(data);
          setData(data);
        }).catch(err=>console.log(err));
    
        const filter = data.filter(data=>{
          if(data.mail === email && data.password === password){
                navigate("/main")
                alert("login Successfully!")
            
          }
          else{
            setex(true);
            setEmail("")
            setPassword("")
            
          }
          
          
        })
    
      };
  return (
    <div>
      <header>
        <div class="header_wrap">
            <Navbar/>
            <form onSubmit={submitHandler}>
      {ex && <div className="red">Entered Invalid Data</div>}

        <span> Email id:</span> <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input" required />
        <span>Password:</span> <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" required/>
        <div>
        <input type="submit" value="SignIn" className="btn" />
        <NavLink to={`/signup`}>
        <input type="button" value="SignUp" className="btn" />


      </NavLink>
      </div>
      </form>
        </div>
    </header>
    <Footer/>
    </div>
  )
}

export default Signin
