import React from 'react'
import { Link } from 'react-router-dom';
import bannerImage from '../assets/cityBackgroundImage.jpg';
import SearchBar from '../components/SearchBar';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${bannerImage})`}}>
      <div className="headerContainer" >
        <h1> Trip Advisor </h1>
        <p> FIND ANY LOCATION THAT IS WORTH SEEING </p>
        <SearchBar />
        <Link to="/contact">
        </Link>
      </div>
    </div>
  )
}

export default Home
