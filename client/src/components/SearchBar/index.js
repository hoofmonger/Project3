import React from "react";

const SearchBar = ({ handleSearchChange }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("test");

    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visuallyhidden">Search Products</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search Products"
        name="s"
        onChange={handleSearchChange}
      />
      <button onClick={handleClick}>Search!</button>
    </form>
  );
};

export default SearchBar;
