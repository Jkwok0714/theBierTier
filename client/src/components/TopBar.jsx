import React from 'react';
// import $ from 'jquery';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    // this.beerList = props.beerList;
    this.state = {
      term: '',
      breweryList: '',
      beerList: props.beerList
    }
  }

  componentWillReceiveProps (nextProps) {
    this.applyAutocomplete(nextProps.beerList);
  }

  componentWillUnmount() {
    $('#searchBar').autocomplete('destroy');
  }

  applyAutocomplete (data) {
    let beerList = data.map((ele) => {
      return ele.name;
    });
    // console.log(beerList);
    let self = this;

    $(function() {
      $("#searchBar").autocomplete({source: beerList});
    });
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  checkBeerList () {
    if (this.props.currView === 'BeerList') {
      return (<div>
        Filter by Brew Name: <input id="searchBar" value={this.state.terms} onChange={this.onChange.bind(this)}/>
        <button onClick={this.search.bind(this)}> Find Bier </button>
      </div>);
    }
  }

  search() {
  }

  render() {
    return (<div>
      <button onClick={() => this.props.changeView('BeerList')}> Bier List </button>
      <button onClick={() => this.props.changeView('AddBeer')}> Add Bier </button>
      <button onClick={this.search.bind(this)}> See Breakdown </button>
      {this.checkBeerList()}
    </div>)
  }
}

export default TopBar;
