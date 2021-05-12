import React from 'react'

const IncrementMenu = ({incrementMenu}) => {

    return <button className="cycle" onClick={() => incrementMenu()}>
            More Recipes
          </button>
}

export default IncrementMenu