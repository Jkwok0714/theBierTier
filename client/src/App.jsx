import React, { Component } from 'react';
import $ from 'jquery';

const HOSTNAME = process.env.SERVER_URL || 'http://127.0.0.1:3000';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      question: ''
    };
  }

  componentDidMount () {
    console.log('About to post to:', SERVER_URL + '/login');
    $.post(SERVER_URL + '/login', {}).then((res) => {
      window.alert('Server responded!');
    }).catch((err) => {
      console.error(err);
      window.alert('Couldn\'t contact server!');
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Bier Tiers</h1>
        </header>
        <h2>The Entry Gate</h2>
        Serenna asks:
        <span id="questionText"></span>
        <input id="responseText" type="text"></input>
        <br /> <br />
        Current host: {SERVER_URL}
      </div>
    );
  }
}

export default App;
