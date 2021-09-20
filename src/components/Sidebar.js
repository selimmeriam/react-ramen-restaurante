import React from "react";
//import {Link} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import {Button} from './Button.js'
import'./Sidebar.css'


export default function Sidebar({isOpen,toggle}) {
  return (
    <>
    <aside className={isOpen ? "sidebar-container" : "sidebar-container-shift"} onClick={toggle}>
     <div className="icons" onClick={toggle} >
        <i className='fas fa-times close'/>
      </div>
      <div className="sidebarmenu">
        <div className="link"> <Link to='../Home#ramens'>Ramens</Link></div>
        <div className="link"> <Link to='../Home#desserts'>Desserts</Link></div>
        <div className="link"> <Link to='../Home#drinks'>Beverages</Link></div>
      </div>
      <div className="side-bar-btn">
        <Link to='/'><Button buttonStyle="btn--primary" buttonSize="btn--order"  >Order Now</Button></Link>
      </div>
    </aside>
    </>
   )
}