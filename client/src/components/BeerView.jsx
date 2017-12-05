import React from 'react';

const BeerView = (props) => {
  let handleClick = () => {

  };

  return (
    <div onClick={handleClick}>
      <h2>{props.beer.name}</h2>
    </div>
  );
};


export default BeerView;
