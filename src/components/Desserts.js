import React from "react";
import {Link} from "react-router-dom"
import {Button} from './Button.js'
import'./Desserts.css'


export default function Desserts( { heading, data } ) {
  return  (
    <div className="desserts--container" id="desserts">
      <div className="desserts--heading"><h2>{heading}</h2></div>
      <div className="desserts--card--wrap">
          {data.map((dessert, index) => {
            return (
              <div className="desserts--card" key={index}>
                <img className="desserts--img" src={dessert.img} alt={dessert.alt} />
                <div className="desserts--info">
                    <div className="desserts--title">{dessert.name}</div>
                    <div className="desserts--desc">{dessert.desc}</div>
                    <div className="desserts--price">{dessert.price}</div>
                    <div className="desserts--btn">
                       <Link to='/'><Button buttonStyle="btn--primary" buttonSize="btn--large">{dessert.button}</Button> </Link>
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    </div>
  );
};
