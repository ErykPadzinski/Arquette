import React, { useState } from "react";
import New from "../../contents/new/New";
import './Home.css'

export default function Home() {
    const [clicked, setClicked] = useState(false)

  const toggleButton = () => {
    setClicked(!clicked)
    console.log("clicked")
  }

  return(
    <div>
      <header>
        <div className="basket">
          <img src="images/others/basket.png" alt="" />
        </div>
        <div className="logo">
    <img src="images/logo/logo-no-background.png" alt="" />
    </div>

        <ul className={clicked ? "active" : ""} id="menu">
          <li  className="menu-link">Men</li>
          <li  className="menu-link">Woman</li>
          <li  className="menu-link">Sport</li>
        </ul>
    
    <button onClick={toggleButton} className={clicked ? "active" : ""} id="burger">
    <span></span>
    <span></span>
    <span></span>
    </button> 
    </header>
    <New />

    </div>
   
  )
}