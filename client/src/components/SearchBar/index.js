import React, {useRef}from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { SearchResults } from '../../pages/SearchResults';
import {QUERY_PRODUCTS, QUERY_SEARCH} from '../../utils/queries'



const SearchBar = (props) => {

    const query = useRef();
    const handleSearch = (e) => {
    e.preventDefault();
    const queryVal = query.current.value
    console.log(queryVal)
}



  const { data: productData } = useQuery(QUERY_SEARCH);

 
  const handleClick = (event) => {
    event.preventDefault()
    const queryVal = query.current.value
    console.log('ca;kldfj;skla')
    console.log(queryVal)
  }







return (

    <form action="/" method='get'>
      {/* <Link to= {`/SearchResults/${product.name}`}> */}  
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
        <button
        onClick = {handleClick} >Search!</button>
    {/* </Link> */}
    </form>

);
};


export default SearchBar