import React from 'react';
import $ from 'jquery';

const HOSTNAME = SERVER_URL || 'http://127.0.0.1:3000';

class AddBeer extends React.Component {
  constructor(props) {
    super(props);
    // this.beerList = props.beerList;
    let d = new Date();
    this.startDate = d.toISOString().substring(0, 10);

    this.state = {
      name: '',
      brewery: '',
      style: '',
      tier: '',
      url: '',
      tastingNote: '',
      date: d,
      profile: [],
      hops: []
    }
  }

  onChange (e, stateToChange) {
    // window.alert('Change detected');
    // console.log(typeof e.target.value);

    this.state[stateToChange] = e.target.value;
    console.log(stateToChange + ': ', this.state[stateToChange]);
  }

  componentDidMount () {
    // document.getElementById('dateInput').value = new Date().toDateInputValue();
    $('#dateInput').val(new Date().toISOString().substring(0, 10));
  }

  submit () {
    if (this.state.name === '' || this.state.brewery === '') {
      window.alert('Name and brewery cannot be empty!');
      return;
    }
    console.log(this.state);

    $.post(HOSTNAME + '/biers', this.state).then((res) => {
      console.log('Postededed');
    }).catch((err) => {
      console.error(err);
      // window.alert('Couldn\'t contact server!');
    });
  }

  render() {
    return (<div>
      <h2>Add a Beer</h2>
      <input id="nameInput" placeholder="Brew Name" onChange={(e) => {this.onChange(e, 'name')}}/>
      <input id="breweryInput" placeholder="Brewery" onChange={(e) => {this.onChange(e, 'brewery')}}/>
      <input id="styleInput" placeholder="Style" onChange={(e) => {this.onChange(e, 'style')}}/><br/>
      <input type="date" id="dateInput" onChange={(e) => {this.onChange(e, 'date')}}/>
      <input id="tastingNoteInput" placeholder="Tasting Notes" onChange={(e) => {this.onChange(e, 'tastingNote')}}/><br/>
      <select defaultValue='3' onChange={(e) => {this.onChange(e, 'tier')}}>
        <option value='1'>1 - Godly</option>
        <option value='2'>2 - Tonics of Joy</option>
        <option value='3'>3 - Monk Worthy</option>
        <option value='4'>4 - Monk Food</option>
        <option value='5'>5 - Peasant Brews</option>
        <option value='6'>6 - Satan's Asshole</option>
      </select>
      <button onClick={this.submit.bind(this)}> Submit New Beer </button>
    </div>)
  }
}

export default AddBeer;
