import React, { useState } from 'react';
import Logo from "../assets/planeLogo.png";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { MdReorder as ReorderIcon, MdOutlineMoreHoriz, MdTravelExplore, MdRestaurantMenu, MdHotel} from 'react-icons/md';
import { GiCruiser } from 'react-icons/gi';
import { FaRoad, FaHome } from 'react-icons/fa';

function NavBar() {
  //openLinks is true (id=open) then show leftside otherwise not
  const [openLinks, setOpenLinks] = useState(false);
  const [openCategories, setCategories] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks)
  }

  const toggleCategories = () => {
    setCategories(!openCategories)
  }
  return (
    <div className="navbar">
      <Link to="/" className="logo" ><img src={Logo} alt="paperplane_logo"/></Link>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
        <div className="categories" id={openCategories ? "open" : "close"} onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}> 
        Categories
        <div className="hiddenCategories">
        <a href="#header-search"><MdHotel size="24px"/> Hotels </a>
        <a href="#header-search"><FaHome size="24px"/> Holiday Homes </a>
        <a href="#header-search"><FaRoad size="24px"/> Stuff to do </a>
        <a href="#header-search"><MdTravelExplore size="24px"/> Travel </a>
        <a href="#header-search"><GiCruiser size="24px"/> Cruises </a>
        <a href="#header-search"><MdOutlineMoreHoriz size="24px"/> More </a>
        </div>
        </div>
        <Link to="/favorites"> Favorites </Link>
        <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <div className="categories" id={openCategories ? "open" : "close"} onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}> 
        <p>Categories </p>
        <div className="hiddenCategories">
        <a href="#header-search"><MdHotel size="24px"/> Hotels </a>
        <a href="#header-search"><FaHome size="24px"/> Holiday Homes </a>
        <a href="#header-search"><FaRoad size="24px"/> Stuff to do </a>
        <a href="#header-search"><MdTravelExplore size="24px"/> Travel </a>
        <a href="#header-search"><GiCruiser size="24px"/> Cruises </a>
        <a href="#header-search"><MdOutlineMoreHoriz size="24px"/> More </a>
        </div>
        </div>
        <Link to="/contact"> Contact </Link>
        <button className="login_button">Log in</button>
        <button className="reorder">
        <ReorderIcon onClick={toggleNavBar}/>
        </button>
      </div>
    </div>
  );
}

export default NavBar
