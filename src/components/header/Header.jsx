import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import {RxCross2} from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { PiUserCircleLight } from "react-icons/pi";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { GrFormClose } from 'react-icons/gr'
import { navData } from "./navData";
import Register from "../form/Register";
import Login from "../form/Login";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [popup, setPopup] = useState(false);
  const [loginSignup, setLoginSignup] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const isLogged = localStorage.getItem('token')

  const navigate = useNavigate()

  const logout = () => {
      localStorage.clear()
      navigate('/')
  }
  const togglePopup = () => {
      setPopup(!popup)
  }

  const toggleLoginSignup = () => {
      setLoginSignup(!loginSignup)
  }

  const handleMobileView = () => {
    setIsMobile(!isMobile);
  };

  const handleMenu = (index) => {
    setOpenItems({
      ...openItems,
      [index]: !openItems[index],
    });
  };

  const Dropdown = () =>{
    setDropdown(!dropdown)
  }

  return (
    <>
    <div className="header-box">
      <header>
        <div className="links-container">
          <button id="mobile-menu-icon" onClick={handleMobileView}>
            {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
          <Link to="/" className="links"><h1 className="logo">
            Food<span>.</span>
          </h1></Link>
          <nav id={isMobile ? "main-nav-mobile" : "main-nav"}>
            <ul type="none" className="nav-list">
              
              {navData.map((item, index) => (
                <li className="nav-list-items" key={index} 
                >
                  <span
                    className="nav-list-item-text"
                    id = {openItems[index] ? "open" : null }
                    // onClick={() => handleMenu(index)}
                    onMouseOver={() => handleMenu(index)}
                  >
                    {item.menu}
                  </span>
                  <span className="caret" onClick={() => handleMenu(index)}>
                    {openItems[index] ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                  {openItems[index] ? (
                    <ul type="none" className="dropdown">
                      {item.submenu.map((subItem, subIndex) => (
                         <Link to={`/recipes/${subItem}`} key={subIndex} style={{textDecoration:"none",color:"white"}}>
                        <li
                          className="dropdown-item"
                          onClick={handleMobileView}
                        >
                          {subItem}
                        </li>
                        </Link>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="nav-buttons">
             <Link to='/search' className="links"><IoIosSearch fontSize="2rem" /></Link>
             <Link to='/saved/recipes' className="links"><BsBookmark fontSize="1.5rem" /></Link>
             {isLogged ?
                        <div className="navbar-logged-in-dropdown">
                            <img src="https://img.sndimg.com/food/image/upload/v1/gk-static/gk/img/avatar/pie.png" alt="profile-icon" className="profile-icon" onClick={Dropdown}></img>
                            <div className={dropdown ? "navbar-logged-in-dropdown-content" : "dropdown-close"}>
                                <Link to='/user/activity' className="navbar-logged-in-dropdown-links links">Profile</Link>
                                <Link to='/addRecipe' className="navbar-logged-in-dropdown-links links">Add a Recipe</Link>
                                <Link to='/usersettings' className="navbar-logged-in-dropdown-links links">User Settings</Link>
                                <Link to='/' className="navbar-logged-in-dropdown-links links" onClick={logout}>Logout</Link>
                            </div>
                        </div>
                        :
                        <PiUserCircleLight fontSize="2rem" onClick={togglePopup} />
                    }          
        </div>      
      </header>
    </div>
    {popup ?
                <div className="navbar-login-register-popup">
                    <div className="navbar-login-register-overlay" onClick={togglePopup}></div>
                    <div className={loginSignup ? "navbar-login-register-popup-content-for-register" : "navbar-login-register-popup-content-for-login"}>
                        <div><GrFormClose onClick={togglePopup} className="navbar-login-register-close-btn" /></div>
                        {loginSignup ? <Register toggleLoginSignup={toggleLoginSignup} togglePopup={togglePopup}/> : <Login toggleLoginSignup={toggleLoginSignup} togglePopup={togglePopup} />}
                    </div>
                </div >
                :
                null
            }

    </>
  );
}
