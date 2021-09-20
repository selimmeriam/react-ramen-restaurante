import React from "react";
import {Link} from "react-router-dom"
import {Button} from './Button.js'
import'./Speciality.css'

export default function Speciality() {
  return (
    <>
    <div className="speciality--container">
      <h2>Ramen of the Day</h2>
      <p><strong><em>Tonkotsu Ramen </em></strong>made of pork bones that boiled down until they dissolve into a cloudy white broth .</p>
       <Link to='/'><Button buttonStyle="btn--primary" buttonSize="btn--large">Order Now</Button></Link>
    </div>
    </>
    )
    };