import '../style.css';
import './navbar.css';
import React from 'react'
export default function navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="logo">
        <img alt = "logo" id = "logo" src = {require("../images/temp.PNG")}></img> 
        </div>
        <div className="title">
Crystal's Beauty Lounge
        </div>
        <div className="menu">

        </div>

      </div>
    </div>
  );
}
