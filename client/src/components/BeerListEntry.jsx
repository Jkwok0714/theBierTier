import React from 'react';

const BeerListEntry = (props) => (
  <div>
    {props.beer.name} - {props.beer.brewery}
  </div>
);

export default BeerListEntry;
