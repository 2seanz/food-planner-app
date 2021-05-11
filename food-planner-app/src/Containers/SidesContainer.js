import React, { Component, Fragment } from 'react';
import Card from "../Components/Card";
import DecrementMenu from '../Components/DecrementMenu';
import IncrementMenu from '../Components/IncrementMenu';
import TypeSelect from '../Components/TypeSelect';


const SidesContainer = ( props ) => {

  return (
    <div>
      <TypeSelect selectEntreeType={props.selectEntreeType} type={props.type} course={props.course} />
      <div className="row m1-3 text-center justify-content-center">
        <DecrementMenu decrementMenu={props.decrementMenu} />
        { props.menu.map( menuItem => 
          <Card 
            key={menuItem.id} 
            menuItem={menuItem} 
            type={props.type} 
          /> )}
        <IncrementMenu incrementMenu={props.incrementMenu} />
      </div>
    </div>
  )
}

  export default SidesContainer