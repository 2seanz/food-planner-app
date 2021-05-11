import React from 'react';

// Components
import CartSplash from '../Components/CartSplash';


const Cart = () => {

  return (
  
    <div>
      <div className="row course-container">
        <div className="card-long m-2 p-2">

            <CartSplash />
            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Monday</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Start your week off right!</p>
                </div>
            </div>

            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Tuesday</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Tuesday placeholder text</p>
                </div>
            </div>

            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Wednesday</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Have something hearty on humpday!</p>
                </div>
            </div>

            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Thursday</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Thursday placeholder text</p>
                </div>
            </div>

            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Friday</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Make sure to have a Friday feast!</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Cart