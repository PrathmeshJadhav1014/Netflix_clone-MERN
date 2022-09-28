import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../img/earth-icon-language-icon-planet-icon-png-favpng-g89jiXSijaPESryc1hDAJQZF3-removebg-preview.png"
import img2 from "../../img/Netflix-removebg-preview.png"

function Get_Started() {
    const[email, setEmail] = useState();

  return (
    <div>
         <header>
        <div class="header_wrap">
            <nav>
                <div class="navbar_wrap">
                    <img src={img2} alt=""/>
                    <div class="input_wrap flex_row">
                        <div class="select_wrap">
                            <div class="lang_logo">
                                <img src={img} alt=""/>
                            </div>
                            <select name="lang" id="lang" class="select_width">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                        
                        <NavLink to="/signin"><input type="button" value="Sign Up" class="select_width"/>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div class="get-started-container">
                <h1 class="font">Unlimited movies, TV <br/> shows and more.</h1>
                <h2 class="font">Watch anywhere. Cancel anytime.</h2>
                <div class="child_get-started-container font">
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div class="select_get-started-container flex_row">
                        <input type="email" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)}/>
                        <button><NavLink to={`/signin/${email}`}>Get Started</NavLink></button>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Get_Started
