import React from "react";
import './header.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()

const toggleButton = () => {
  setClicked(!clicked)
}
  return (
    <header>
        <div className="basket">
          <img src="images/others/basket.png" alt="" />
        </div>
        <div className="logo">
    <img onClick={() => navigate('/')} src="images/logo/logo-no-background.png" alt="" />
    </div>

        <ul className={clicked ? "active" : ""} id="menu">
          <li onClick={() => navigate('Man')} className="menu-link">Men</li>
          <li  className="menu-link">Woman</li>
          <li  className="menu-link">Sport</li>
        </ul>
    
    <button onClick={toggleButton} className={clicked ? "active" : ""} id="burger">
    <span></span>
    <span></span>
    <span></span>
    </button> 
    </header>
  )
}