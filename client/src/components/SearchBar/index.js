import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';




const SearchBar = () => (
    <form action="/" method='get'>
        <label htmlFor="header-search">
            <span className= 'visuallyhidden'>Search Blog Post</span>
        </label>
        <input 
        type='text'
        id = "header-search"
        placeholder = "search products"
        name = "s"
        />
    </form>
);

export default SearchBar