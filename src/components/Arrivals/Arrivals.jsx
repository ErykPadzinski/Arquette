import React from "react";
import "./arrivals.css"

export function Arrivals(props) {
  return(
    <div className="product">
      <img className="product-img" src={props.img}/>
      <div className="title">
        <h1>{props.name}</h1>
        <div className="about">
        <p className="brand">{props.brand}</p>
        <p className="price">{props.price.toFixed(2)}$</p>
        </div>
      </div>
    </div>
  )
}