import React, { Component } from 'react';
// import $ from 'jquery';
import BeerList from './components/BeerList.jsx';
import TopBar from './components/TopBar.jsx';
import AddBeer from './components/AddBeer.jsx';
import BeerView from './components/BeerView.jsx';


const HOSTNAME = SERVER_URL || 'http://127.0.0.1:3000';
// import logo from './logo.svg';
// import './App.css';

class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {
      view: 'BeerList',
      beerList: [],
      filteredList: [],
      selectedBeer: undefined
    };
  }

  componentDidMount () {
    let self = this;
    // console.log('About to post to:', HOSTNAME + '/login');
    $.get(HOSTNAME + '/biers').then((res) => {
      // window.alert('Server responded!');
      self.setState({
        beerList: res,
        filteredList: res
      });
    }).catch((err) => {
      console.error(err);
      // window.alert('Couldn\'t contact server!');
    });
  }

  changeView (viewInput) {
    this.setState({ view: viewInput });
  }

  changeBeer (beer) {
    console.log('Changing beer to', beer);
    this.setState({ selectedBeer: beer });
  }

  getViewComponent () {
		if (this.state.view === 'AddBeer') {
      return <AddBeer changeView={this.changeView.bind(this)}/>;
    } else if (this.state.view === 'BeerView') {
      return <BeerView changeView={this.changeView.bind(this)} beer={this.state.selectedBeer}/>;
		} else {
			return <BeerList beerList={this.state.filteredList} changeBeer={this.changeBeer.bind(this)} changeView={this.changeView.bind(this)}/>;
		}
	}

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Bier Tiers</h1>
        </header>
        <hr />
        <TopBar beerList={this.state.beerList} changeView={this.changeView.bind(this)} currView={this.state.view}/>
        <hr />
        {this.getViewComponent()}
        <br /><br />
        <span className="hostSpan">Current host: {SERVER_URL}</span>
      </div>
    );
  }
}

export default Dashboard;
