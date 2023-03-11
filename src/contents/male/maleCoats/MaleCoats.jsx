import React from "react";
import { Arrivals } from "../../../components/Arrivals/Arrivals";

export default function MaleShoes() {
  return(
    <div>
        <h1 className="arrival-header">Coats</h1>
        <div className="products-all">
      <Arrivals img="images/shop/male/coats/coat-gionatti-black.jpeg" name="Gionatti Coat Black" brand="Gionatt" price={229.00} />
      <Arrivals img="images/shop/male/coats/coat-gionatti-brown.jpeg" name="Gionatti Coat Brown" brand="Gionatti" price={179.00} />
      <Arrivals img="images/shop/male/coats/coat-gionatti-gray.jpeg
      " name="Gionatti Coat Gray" brand="Gionatti" price={209.00} />
      <Arrivals img="images/shop/male/coats/coat-pako-lorente-blue.jpeg" name="Pako Lorente Coat" brand="Pako Lorente" price={379.00} />
      
        </div>
      
    </div>
  )
}