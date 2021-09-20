import React from "react";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import {Button} from"./Button.js"
import'./HeroSection.css'

export default function HeroSection(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    }
    
  return (
   <>
   
   <div className= "hero-container">
      <Navbar toggle={toggle}/>
      <Sidebar  isOpen={isOpen} toggle={toggle}/>
      <div className="hero-content">
        <div className="hero-items">
          <h1>Greatest Ramen Ever</h1>
          <p>Ready in 2 minutes</p>
          <Link to='/'><Button buttonStyle="btn--primary" to="/" >Place Order</Button></Link>
        </div>
      </div>
    </div>
   </>


  )
}