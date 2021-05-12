const TypeSelectButton = ({type, selectEntreeType}) => {

    return (
        <button 
            className="btn btn-primary btn-md m-2"
            onClick={ () => selectEntreeType(type) } >
            <span value="type">{ `${type}` }</span>
        </button>
    )
}

export default TypeSelectButton