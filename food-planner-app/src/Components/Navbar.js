import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
   
  return(
    <nav className="navbar navbar-light bg-info mb-4">
      <Link to="/">
        <span className="navbar-brand">FarmFresh</span>
      </Link>

      <span>
        <input
          placeholder="search by name..."  
          className="search"
          onChange={ null }
        ></input>
      </span>
    </nav>
  )
}

export default Navbar