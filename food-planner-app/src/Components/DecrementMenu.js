import React from 'react'

const DecrementMenu = ({decrementMenu}) => {
  
    return <button className="cycle" onClick={() => decrementMenu()}>
            Previous Recipes
          </button>
}

export default DecrementMenu