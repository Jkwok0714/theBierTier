import React, { Component } from 'react';
import $ from 'jquery';

const HOSTNAME = SERVER_URL || 'http://127.0.0.1:3000';
// import logo from './logo.svg';
// import './App.css';

class Dashboard extends Component {
  constructor (props) {
    super (props);
    this.state = {
    };
  }

  componentDidMount () {
    // let self = this;
    // console.log('About to post to:', HOSTNAME + '/login');
    // $.post(HOSTNAME + '/login', {}).then((res) => {
    //   // window.alert('Server responded!');
    //   self.setState({
    //     question: res
    //   });
    // }).catch((err) => {
    //   console.error(err);
    //   // window.alert('Couldn\'t contact server!');
    // });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Bier Tiers</h1>
        </header>
        <h2>The App</h2>

        Current host: {SERVER_URL}
      </div>
    );
  }
}

export default Dashboard;
