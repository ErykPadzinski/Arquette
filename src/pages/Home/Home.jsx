import React, { useState } from "react";
import New from "../../contents/new/New";
import './Home.css'
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home() {
    

  return(
    <div>
      <Header />
      <New />

    </div>
   
  )
}