import React, {useRef} from "react";
// import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
// import { SearchResults } from '../../pages/SearchResults';
import { QUERY_SEARCH, QUERY_PRODUCTS } from "../../utils/queries";


const SearchBar = ({handleSearchChange}) => {
  // const { data } = useQuery(QUERY_PRODUCTS);
  // console.log(data)


  const handleClick = (event) => {
    event.preventDefault();
    console.log("test");
    
    try {
      // const { data } = searchResults({});
      // console.log(data);
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
    // class NameForm extends React.SearchBar {
    //   constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {    this.setState({value: event.target.value});  }
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
    
  };

  return (
    <form action="/" method="get">
      {/* <Link to= {`/SearchResults/${product.name}`}> */}
      <label htmlFor="header-search">
        <span className="visuallyhidden">Search Products</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search Products"
        name="s"
        // ref = {searchQuery}
        onChange = {handleSearchChange}
      />
      <button onClick={handleClick}>Search!</button>
      {/* </Link> */}
    </form>
  );
};

export default SearchBar;
