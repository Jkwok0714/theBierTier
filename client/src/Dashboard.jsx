import React, { Component } from 'react';
// import $ from 'jquery';
import BeerList from './components/BeerList.jsx';
import TopBar from './components/TopBar.jsx';
import AddBeer from './components/AddBeer.jsx';


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

  getViewComponent () {
		if (this.state.view === 'AddBeer') {
      return <AddBeer changeView={this.changeView.bind(this)}/>;
		} else {
			return <BeerList beerList={this.state.filteredList} changeView={this.changeView.bind(this)}/>;
		}
	}

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Bier Tiers</h1>
        </header>

        <h2>The App</h2>
        <TopBar beerList={this.state.beerList} changeView={this.changeView.bind(this)} currView={this.state.view}/>
        {this.getViewComponent()}
        <br /><br />
        Current host: {SERVER_URL}
      </div>
    );
  }
}

export default Dashboard;
