import React, { Component, Fragment } from 'react';
import Card from "../Components/Card";
import DecrementMenu from '../Components/DecrementMenu';
import IncrementMenu from '../Components/IncrementMenu';


const CardContainer = ( props ) => {

  return (
    <div className="row m1-3">
      <DecrementMenu decrementMenu={props.decrementMenu} />
      { props.menu.map(menuItem => <Card key={menuItem.id} menuItem={menuItem}/>) }
      <IncrementMenu incrementMenu={props.incrementMenu} />
    </div>
  )
}

  export default CardContainer