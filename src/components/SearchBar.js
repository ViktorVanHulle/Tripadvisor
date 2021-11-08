import React from 'react';
import "../styles/Searchbar.css";
import { ImSearch } from 'react-icons/im';

function SearchBar(category) {
  return (
    <div class="box">
      <form role="search" action="/Search" method="get">
        <label htmlFor="header-search">
        <ImSearch id="searchIcon"/>
        </label>
        <input
        type="search"
        id="header-search"
        placeholder="Where do you want to go?"
        name="searchBar"
        role="searchbox"
        aria-label="Zoeken"
        />
      </form>
    </div>
  )
}

export default SearchBar
