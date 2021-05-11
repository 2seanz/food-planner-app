import React from 'react';

const TypeSelect = ({selectEntreeType, course}) => {

  return (
    <div className="jumbotron bg-secondary text-center">
        <div className="container">
            <div className="ht-tm-header">
                <h3 className="display-3">{`${course} Selections`}</h3>
                <span className="lead text-primary">{`Select what kind of ${course.toLowerCase()} you would like and add any that look appetizing to your meal plan. You can always remove them later.`}</span>
    
                <div className="mt-4">
                    <button 
                        className="btn btn-primary btn-md m-2"
                        onClick={() => selectEntreeType("Beef")} >
                        <span value="Beef">Beef</span>
                    </button>
                    <button 
                        className="btn btn-primary btn-md m-2"
                        onClick={() => selectEntreeType("Poultry")} >
                        <span value="Poultry">Poultry</span>
                    </button>
                    <button 
                        className="btn btn-primary btn-md m-2"
                        onClick={() => selectEntreeType("Seafood")} >
                        <span value="Seafood">Seafood</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TypeSelect   