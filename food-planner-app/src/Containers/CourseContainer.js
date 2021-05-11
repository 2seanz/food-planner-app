import React from 'react';
import { Link } from 'react-router-dom';

// Components
import WelcomeSplash from '../Components/WelcomeSplash';

const CourseContainer = ({ handleCourseState }) => {

  return (
  
    <div>
      <WelcomeSplash />
      <div className="row course-container">
        <div className="card-long m-2 p-2">

          <Link to="/entrees" onClick={() => handleCourseState("Entree")}>
            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Entrees</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Choose from fresh selections updated weekly!</p>
                </div>
            </div>
          </Link>

          <Link to="/sides" onClick={() => handleCourseState("Sides")}>
            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Sides</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Guaranteed to add a little extra fun to your meal!</p>
                </div>
            </div>
          </Link>

          <Link to="/desserts" onClick={() => handleCourseState("Dessert")}>
            <div>
              <img src={ null } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Desserts</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Decadent and mouthwatering desserts straight from our pastry chefs!</p>
                </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default CourseContainer