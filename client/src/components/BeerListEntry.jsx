import React from 'react';

const BeerListEntry = (props) => {
  let handleClick = () => {
    props.changeBeer(props.beer);
    props.changeView('BeerView');
  };

  return (
    <div onClick={handleClick}>
      {props.beer.brewery} - {props.beer.name} - Tier {props.beer.tier}
    </div>
  );
};


export default BeerListEntry;
