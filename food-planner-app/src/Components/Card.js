import React from 'react';

const Card = (props) => {

  return (
    <div className="card m-2 p-2">
    <img src={props.menuItem.image} className="card-img-top" alt="..." />
      <div className="card-body">
          <h4 className="card-title">{props.menuItem.dish}</h4>
          <h5 className="card-title">{ null }</h5>
          <p className="card-text">{props.menuItem.description}</p>
          <button 
              className="button p-1 m-1"
              >Add to Menu</button>
          <button className="button p-1 m-1">Comment</button>
      </div>
    </div>
  )
}

export default Card