import React from 'react';
import './App.css';
import DECISIONS from './decisions';
import _ from 'lodash';

const METER_MAX = 100;
const METER_MIN = 0; // you lose when any meter reaches 0

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDecisionIndex: 0,
      currentDecision: DECISIONS[0],
      meters: {
        money: 50,
        timeWithFamily: 50,
        caringAboutVoting: 50
      },
      gameOver: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="civ-background">
            Your name is Francis.
            You are a 35 year old single mother of an 11 year old girl with a chronic illness.
            You live in Florida and just became a citizen 6 months ago and are excited to participate in the presidential election.
            You speak and read beginner English.
          </p>
          <div className="civ-meters">
            <div>Money: {this.state.meters.money}</div>
            <div>Time with family: {this.state.meters.timeWithFamily}</div>
            <div>Caring about voting: {this.state.meters.caringAboutVoting}</div>
          </div>
          {
            (this.state.gameOver || this.state.currentDecision) ?
              <div className="civ-decision">
                <p>{this.state.currentDecision.question}</p>
                <button onClick={(e) => this.choose(this.state.currentDecision.choices[0])}>{this.state.currentDecision.choices[0].text}</button>
                <button onClick={(e) => this.choose(this.state.currentDecision.choices[1])}>{this.state.currentDecision.choices[1].text}</button>
              </div> : <p>Game over</p>
          }
        </header>
      </div>
    );
  }

  choose(choice) {
    let gameOver = false;
    const { meterDeltas } = choice;
    const newMeters = _.mapValues(this.state.meters, (meterValue, meterName) => {
      if (meterDeltas[meterName]) {
        const newMeterValue = meterValue + meterDeltas[meterName];
        if (newMeterValue <= METER_MIN) {
          gameOver = true;
          return METER_MIN;
        } else if (newMeterValue >= METER_MAX) {
          return METER_MAX;
        } else {
          return newMeterValue;
        }
      } else {
        return meterValue;
      }
    });
    this.setState({
      currentDecisionIndex: this.state.currentDecisionIndex + 1,
      currentDecision: DECISIONS[this.state.currentDecisionIndex + 1],
      meters: newMeters,
      gameOver: gameOver
    });
  }
}

export default App;
