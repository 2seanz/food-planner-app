const Navbar = (props) => {

   
    return(
        <nav className="navbar navbar-light bg-info mb-4">
            <span 
                onClick={ null } 
                className="navbar-brand">FarmFresh
        
            <input 
                placeholder="search by name..."  
                className="form-control search"
                onChange={ null }
            ></input>
            </span>
        </nav>
    )
}

export default Navbar