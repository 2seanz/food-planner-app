import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({resetPosition}) => {
   
  return(
    <nav className="navbar navbar-light bg-info mb-4">
      <Link to="/" onClick={() => resetPosition()}>
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