import React from 'react';

const BeerListEntry = (props) => (
  <div>
    <h5>HERESABIER</h5>
    {props.beer.name} - {props.beer.brewery}
  </div>
);

export default BeerListEntry;
