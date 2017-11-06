import React, { Component } from 'react';
import $ from 'jquery';
import BeerList from './components/BeerList.jsx';


const HOSTNAME = SERVER_URL || 'http://127.0.0.1:3000';
// import logo from './logo.svg';
// import './App.css';

class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {
      view: 'BeerList',
      beerList: [],
      selectedBeer: undefined
    };
  }

  componentDidMount () {
    let self = this;
    // console.log('About to post to:', HOSTNAME + '/login');
    $.get(HOSTNAME + '/biers').then((res) => {
      // window.alert('Server responded!');
      self.setState({
        beerList: res
      });
    }).catch((err) => {
      console.error(err);
      // window.alert('Couldn\'t contact server!');
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Bier Tiers</h1>
        </header>
        <h2>The App</h2>
        <BeerList beerList={this.state.beerList} />
        <br /><br />
        Current host: {SERVER_URL}
      </div>
    );
  }
}

export default Dashboard;
