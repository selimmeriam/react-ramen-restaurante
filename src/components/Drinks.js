import React from "react";
import {Link} from "react-router-dom"
import {Button} from './Button.js'
import'./Desserts.css'


export default function Drinks( { heading, data } ) {
  return  (
    <div className="desserts--container" id="drinks">
      <div className="desserts--heading"><h2>{heading}</h2></div>
      <div className="desserts--card--wrap">
          {data.map((drink, index) => {
            return (
              <div className="desserts--card" key={index}>
                <img className="desserts--img" src={drink.img} alt={drink.alt} />
                <div className="desserts--info">
                    <div className="desserts--title">{drink.name}</div>
                    <div className="desserts--desc">{drink.desc}</div>
                    <div className="desserts--price">{drink.price}</div>
                    <div className="desserts--btn">
                       <Link to='/'><Button buttonStyle="btn--primary" buttonSize="btn--large">{drink.button}</Button> </Link>
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    </div>
  );
};
