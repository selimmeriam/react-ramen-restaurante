import React from "react";
import {Link} from "react-router-dom"
import {Button} from './Button.js'
import'./Products.css'


export default function Products( { heading, data } ) {
  return  (
    <div className="product--container" id="ramens">
      <div className="product--heading"><h2>{heading}</h2></div>
      <div className="product--card--wrap">
          {data.map((product, index) => {
            return (
              <div className="product--card" key={index}>
                <img className="product--img" src={product.img} alt={product.alt} />
                <div className="product--info">
                    <div className="product--title">{product.name}</div>
                    <div className="product--desc">{product.desc}</div>
                    <div className="product--price">{product.price}</div>
                    <div className="product--btn">
                       <Link to='/'><Button buttonStyle="btn--primary" buttonSize="btn--large">{product.button}</Button> </Link>
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    </div>
  );
};
