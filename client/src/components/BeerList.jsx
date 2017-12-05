import React from 'react';
import BeerListEntry from './BeerListEntry.jsx';

const BeerList = (props) => (
  <div>
    <div className="beerList">
      <div className="beerList-table">
        {props.beerList.map((beer) =>
          <BeerListEntry beer={beer} key={beer._id} changeBeer={props.changeBeer} changeView={props.changeView} />
        )}
      </div>
    </div>
  </div>
);

export default BeerList;
