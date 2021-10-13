import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';




const SearchBar = (props) => {

    const query = useRef();
    const handleSearch = (e) => {
    e.preventDefault();
    const queryVal = query.current.value
    props.fetchProduct(queryVal.trim())
}






return (
<Link to= '/SearchResults'>
    <form action="/" onSubmit={handleSearch} method='get'>
        <label htmlFor="header-search">
            <span className= 'visuallyhidden'>Search Products</span>
        </label>
        <input 
        type='text'
        id = "header-search"
        placeholder = "Search Products"
        name = "s"
        ref = {query}
        />
        <button>Search!</button>
    </form>
</Link>
);
};


export default SearchBar