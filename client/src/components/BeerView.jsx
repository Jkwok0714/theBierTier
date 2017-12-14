import React from 'react';

const BeerView = (props) => {
  let handleClick = () => {

  };

  return (
    <div>
      <h2>{props.beer.name}</h2>
      <div>{props.beer.date}</div>
      <div>{props.beer.brewery}</div>
      <div>{props.beer.style}</div>
      <div>{props.beer.tastingNote}</div>

      <button onClick={() => props.changeView('BeerList')}> Back </button>
      <button onClick={() => props.changeView('AddBeer')}> Edit Bier </button>
      <button> Delete Bier </button>
    </div>
  );
};


export default BeerView;
