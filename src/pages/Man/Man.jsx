import React from "react";
import Header from "../../components/Header/Header";
import MaleShoes from "../../contents/male/maleShoes/MaleShoes";
import MaleCoats from "../../contents/male/maleCoats/MaleCoats";
import "./Man.css"

export default function Man() {
  return(
    <div>
        <Header />
        <div className="man-header">
      <img className="glasses" src="images/others/male-header.jpg" alt="" />
      <h1 className="man-title">Express Yourself</h1>
        </div>
        <MaleShoes />
        <MaleCoats />
      </div>
  )
}