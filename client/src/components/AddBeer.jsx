import React from 'react';
// import $ from 'jquery';

class AddBeer extends React.Component {
  constructor(props) {
    super(props);
    // this.beerList = props.beerList;
    let d = new Date();
    let dateString = d.toISOString().substring(0, 10);

    this.state = {
      name: '',
      brewery: '',
      style: '',
      tier: '',
      url: '',
      tastingNote: '',
      date: dateString,
      profile: [],
      hops: []
    }
  }

  onChange (e, stateToChange) {
    this.state[stateToChange] = e.target.value;
    console.log(stateToChange + ': ', this.state[stateToChange]);
  }

  submit () {
    if (this.state.name === '' || this.state.brewery === '') {
      window.alert('Name and brewery cannot be empty!');
      return;
    }
    console.log(this.state);
  }

  render() {
    return (<div>
      <h2>Add a Beer</h2>
      <input id="nameInput" placeholder="Brew Name" value={this.state.name} onChange={(e) => {this.onChange(e, 'name')}}/>
      <input id="breweryInput" placeholder="Brewery" value={this.state.brewery} onChange={(e) => {this.onChange(e, 'brewery')}}/>
      <input id="styleInput" placeholder="Style" value={this.state.style} onChange={(e) => {this.onChange(e, 'style')}}/><br/>
      <input type="date" id="dateInput" value={this.state.tastingNote} onChange={(e) => {this.onChange(e, 'date')}}/>
      <input id="tastingNoteInput" placeholder="Tasting Notes" value={this.state.date} onChange={(e) => {this.onChange(e, 'tastingNote')}}/><br/>
      <button onClick={this.submit.bind(this)}> Submit New Beer </button>
    </div>)
  }
}

export default AddBeer;
