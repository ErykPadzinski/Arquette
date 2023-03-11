import React from "react";
import { Arrivals } from "../../../components/Arrivals/Arrivals";

export default function MaleShoes() {
  return(
    <div>
        <h1 className="arrival-header">Shoes</h1>
        <div className="products-all">
      <Arrivals img="images/shop/female/shoes/nike-air-huarache-white.jpg" name="Nike Air Huarache" brand="Nike" price={229.00} />
      <Arrivals img="images/shop/female/shoes/nike-air-force-white.jpeg" name="Nike Air Force" brand="Nike" price={179.00} />
      <Arrivals img="images/shop/female/shoes/adidas-superstar.jpeg" name="Adidas Superstar" brand="Adidas" price={209.00} />
      <Arrivals img="images/shop/male/shoes/adidas-nmd.webp" name="Adidas NMD" brand="Adidas" price={379.00} />
      
        </div>
      
    </div>
  )
}