const CartCard = ({ cartItem, removeFromMealPlan}) => {

    return (
      <div className="card m-2 p-2">
      <img src={cartItem.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-title">{cartItem.dish}</h4>
            <h5 className="card-title">{ null }</h5>
            <p className="card-text">{cartItem.description}</p>
            <button className="button p-1 m-1">Comment</button>
            <button 
                className="button p-1 m-1"
                onClick={() => removeFromMealPlan(cartItem)}
            >Remove</button>
        </div>
      </div>
    )
  }
  
  export default CartCard