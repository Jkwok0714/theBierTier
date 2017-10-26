import React, { Component } from 'react';
import $ from 'jquery';

const HOSTNAME = SERVER_URL || 'http://127.0.0.1:3000';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  componentDidMount () {
    let self = this;
    console.log('About to post to:', HOSTNAME + '/login');
    $.post(HOSTNAME + '/login', {}).then((res) => {
      // window.alert('Server responded!');
      self.setState({
        question: res
      });
    }).catch((err) => {
      console.error(err);
      // window.alert('Couldn\'t contact server!');
    });
  }

  submitAnswer () {
    console.log(this.state.answer);
    $.post({
      url: HOSTNAME + '/answer',
      data: {
        a: this.state.answer,
        q: this.state.question
      }
    }).then((res) => {
      console.log(res);
      if (res === 'Bad') {
        window.alert('Wrong answer!');
      } else {
        window.location.replace('/dashboard');
        // location.reload();
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  handleChange (e) {
    this.setState({
      answer: e.target.value
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Bier Tiers</h1>
        </header>
        <h2>The Entry Gate</h2>
        Serenna asks: {this.state.question} <br />
        <span id="questionText"></span>
        <input id="responseText" type="text" onChange={this.handleChange.bind(this)}></input>
        <button id="submitButton" onClick={this.submitAnswer.bind(this)}>Submit</button>
        <br /> <br />
        Current host: {SERVER_URL}
      </div>
    );
  }
}

export default App;
