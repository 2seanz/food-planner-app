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
              <img src={"https://healthydirections.ca/wp-content/uploads/2019/08/Screen-Shot-2019-08-11-at-11.26.35-PM.png"} className="card-img-left" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Entrees</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Choose from fresh selections updated weekly!</p>
                </div>
            </div>
          </Link>

          <Link to="/sides" onClick={() => handleCourseState("Sides")}>
            <div>
              <img className="courseImg" src={"https://c.ndtvimg.com/french-fries_625x300_1528454061766.jpg"} className="card-img-left" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Sides</h4>
                    <h5 className="card-title">{ null }</h5>
                    <p className="card-text">Guaranteed to add a little extra fun to your meal!</p>
                </div>
            </div>
          </Link>

          <Link to="/desserts" onClick={() => handleCourseState("Dessert")}>
            <div>
              <img className="courseImg" src={"https://img.taste.com.au/f6_C_uDy/taste/2018/10/no-bake-rocky-road-cheesecake-143048-2.jpg"} className="card-img-left" alt="..." />
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