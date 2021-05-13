const CartSplash = ({ cart }) => {

  const splashMessage = () => {
    if(cart.length === 0){
      return "Looks empty in here..."
    } else if(cart.length < 5) {
      return "Those are some great picks!"
    } else {
      return "Mmmmm! Looks like a great meal plan!"
    }
}

  const minihMessage = () => {
    if(cart.length === 0){
      return "Head on back to the menue to take a look at our great selections!"
    } else if(cart.length < 5) {
      return "... but we still need a few more! Let's head back to the menue and find some other delicious options!"
    } else {
      return "You've got it! This looks like dinner for a week!"
    }
}


  return (
    <div className="bg-secondary text-center">
        <div className="cart-splash-container">
            <div className="ht-tm-header">
                <h4 className="display-4">{splashMessage()}</h4>
                <span className="lead text-primary">{minihMessage()}</span>
            </div>
        </div>
    </div>
  )
}

export default CartSplash