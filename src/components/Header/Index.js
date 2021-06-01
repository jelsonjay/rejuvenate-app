import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
     <header>
    <div className="container">
    <input type="checkbox" name="" id="check" />
            
    <div className="logo-container">
    <img src="./images/logo.png" alt="" />
    </div>

    <div className="nav-btn">
    <div className="nav-links">
    <ul>
    <li className="nav-link" style={{'--animation':".6s"}}>
    <a href="/">Home</a>
    </li>
    <li className="nav-link" style={{'--animation' : ".85s"}}>
    <a href="/">About<img  className="fas" src="./icons/chevron-down.svg" alt="" /></a>
    <div className="dropdown">
    <ul>
    <li className="dropdown-link">
    <a href="/">Our Strategy</a>
    </li>
    <li className="dropdown-link">
    <a href="/">NetWork Map</a>
    </li>
    <li className="dropdown-link">
    <a href="/">Contract Directory</a>
    </li>
    </ul>
    </div>
    </li>

    <li className="nav-link" style={{'--animation':"1.35s"}}>
    <a href="/">News</a>
    </li>

    <li className="nav-link" style={{'--animation':"1.1s"}}>
    <a href="/">ForYou<img className="fas" src="./icons/chevron-down.svg" alt="" /></a>
    <div className="dropdown">
    <ul>
    <li className="dropdown-link">
    <a href="/">Corona Virus</a>
    </li>
    <li className="dropdown-link">
    <a href="/">ePaysilips</a>
    </li>
    <li className="dropdown-link">
    <a href="/">Health & Welbeing</a>
    </li>
    </ul>
    </div>
    </li>
    <li className="nav-link" style={{'--animation': "1.1s"}}>
    <a href="/">Departments<img className="fas" src="./icons/chevron-down.svg" alt="" /></a>
    <div className="dropdown">
    <ul>
    <li className="dropdown-link">
    <a href="/">Passenger Services</a>
    </li>
    <li className="dropdown-link">
    <a href="/">Train Services</a>
    </li>
    <li className="dropdown-link">
    <a href="/">Engineering</a>
    </li>
    </ul>
    </div>
    </li>

    <li className="nav-link" style={{'--animation':"1.35s"}}>
    <a href="/">Get in Touch</a>
    </li>
    </ul>
    </div>


    <div className="icons social-icons" style={{'--animation': "1.8s"}}>
    <a href='/'><span className="search-text">Search</span></a>
    <a href='/'><img className='search' src='./icons/search.svg' alt='' /></a>
    <a href='/' className="btn transparent">System Access</a>
    <a href='/'><img className='user' src='./icons/user.svg' alt='' /><span className="user-test"></span></a>
    <a href='/'><span className="user-text">Leon</span></a>
    </div>
    </div>

    <div className="burger-menu-container">
    <div className="burger-menu">
    <div></div>
    </div>
    </div>
       
    </div>
    </header>
      
    </div>
  )
}

export default Header
