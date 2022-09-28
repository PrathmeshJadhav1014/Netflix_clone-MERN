import React from 'react'
import img from "../../img/earth-icon-language-icon-planet-icon-png-favpng-g89jiXSijaPESryc1hDAJQZF3-removebg-preview.png"

function Footer() {
  return (
    <>
    <footer>
        <div class="footer_wrap font">
            <div class="footer_text">Questions? Call 000-800-040-1843</div>
            <div class="footer_card">
                <div class="card1">
                    <ul>
                        <li> <a href="#"> FAQ</a></li>
                        <li> <a href="#"> Investor Relations</a></li>
                        <li> <a href="#"> Privacy</a></li>
                        <li> <a href="#"> Speed Test</a></li>
                    </ul>
                </div>
                <div class="card1">
                    <ul>
                        <li> <a href="#"> Help Center</a></li>
                        <li> <a href="#"> Jobs</a></li>
                        <li> <a href="#"> Cookie Preferences</a></li>
                        <li> <a href="#"> Legal Notices</a></li>
                    </ul>
                </div>
                <div class="card1">
                    <ul>
                        <li> <a href="#"> Account</a></li>
                        <li> <a href="#"> Way to Watch</a></li>
                        <li> <a href="#"> Corporate Information</a></li>
                        <li> <a href="#"> Only On Netflix</a></li>
                    </ul>
                </div>
                <div class="card1">
                    <ul>
                        <li> <a href="#"> Media Center</a></li>
                        <li> <a href="#"> Terms Of Use</a></li>
                        <li> <a href="#"> About Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer_lang">
                    <div class="select_wrap">
                        <div class="lang_logo">
                            <img src={img} alt=""/>
                        </div>
                        <select name="lamg" id="lang">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
            </div>
            <div class="name">
                Netflix India
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer