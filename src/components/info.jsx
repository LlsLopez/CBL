import React from 'react'
import '../style.css';
import './info.css';

export default function info() {
  return (
    <div className="info">


    <div className="location">
    <img src = {require("../images/location.png")} alt="temp" className = "icons"></img>
    <div id = "head">Location: </div>
    841 Indiana Ave. <br></br>
    Venice, Ca 90291

    </div>

    <div className="hours">
    <img src = {require("../images/clock.png")} alt="temp" className = "icons"></img>
    <div id = "head"> Hours of Operation: </div>
    Monday: closed <br></br>
    Tuesday: closed <br></br>
    Wednesday: closed <br></br>
    Thursday: closed <br></br>
    Friday: closed <br></br>
    Saturday: closed <br></br>
    Sunday: closed 
    </div>

  

    <div className="parking">
    <img src = {require("../images/car.png")} alt="temp" className = "icons"></img>
    <br></br>
    <div id = "head"> Parking: </div>
        Residential parking available at all times
    </div>



    </div>
  )
}

