import React from "react";


function NavBar () {
    const [state , setState] = React.useState(false)
    return (
        <header>
         <nav className="nav-bar">
         <img className="main-logo" src= "/images/drivelogo.png"/>
          <ul className="nav-bar-menu">
          <li> <a href="" > Home </a></li>   
          <li> <a href="" > Our Courses </a></li>   
          <li> <a href="" > Contact </a></li>   
          <li> <a href="" > About </a></li>   
          </ul>  
          <a  href = "" className = "letgo-btn">Let's GO </a>
            
           <div className={state ?  "overlay": "overlay-none" }></div>

            <div className="hamburger-menu" onClick={() => setState(!state)}>
         <div id="menu" className={state === true && "icon"}>
         <div className="bar" id="bar1"></div>
         <div className="bar" id="bar2"></div>
         <div className="bar" id="bar3"></div>
     
         </div>
         <ul id="nav"  className= { state ? "change" : "nav"}>
           <li> <a href  = "" className="signup-login">Signup/Login</a> </li>
           <li><a href="">Home</a></li>
           <li><a href="">Our Courses</a></li>
           <li><a href="">Contact</a></li>
           <li><a href="">About</a></li>
         </ul>
            </div>
       </nav>
       </header>

    )
}

export  default NavBar ; 