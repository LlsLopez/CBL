import '../style.css';
import './intro.css';
import React from 'react'

export default function intro() {
  return (
    <div className = "intro">
        <div className="socials">

         <div className="instagram">
            <a href = "https://www.instagram.com/cbl_90291/"> 
          <img alt = "instagram" id = "instagram" src = {require("../images/Instagram_Glyph_Gradient.png")}></img>  
          </a>
          </div>   
          <div className="facebook">
            <a href = "https://www.facebook.com/"> 
          <img alt = "facebook" id = "facebook" src = {require("../images/Facebook_Logo_Primary.png")}></img>  
          </a>
          </div> 



        </div>
 
        <div className="address">
            {/*841 Indiana Ave.<br></br>Venice, Ca 90291*/}
        </div>
  
        <div className="filler">

        </div>
        <div className="phone">
                Call for an appointment! <br></br>
                        310-803-0951
        </div>
        
        
        
        
        
        </div>
  )
}

