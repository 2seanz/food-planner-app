import React from 'react'

const DecrementMenu = ({decrementMenu}) => {
    return <button onClick={() => decrementMenu()}>
            Previous Recipes
          </button>
}

export default DecrementMenu