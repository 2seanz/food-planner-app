import React from 'react'

const IncrementMenu = ({incrementMenu}) => {

    return <button onClick={() => incrementMenu()}>
            More Recipes
          </button>
}

export default IncrementMenu