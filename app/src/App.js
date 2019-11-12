import React from 'react';
import './App.css';
import DECISIONS from './decisions';
import _ from 'lodash';

const METER_MAX = 100;
const METER_MIN = 0; // you lose when any meter reaches 0

const DECISIONS_SHUFFLED = _.shuffle(DECISIONS); // shuffle once for a fresh game each time
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDecisionIndex: 0,
      currentDecision: DECISIONS_SHUFFLED[0],
      meters: {
        money: 50,
        timeWithFamily: 50,
        caringAboutVoting: 50
      },
      gameOver: false,
      gameOverMeterNames: []
    }
  }

  render() {
    return (
      <div className="App">
        <p className="civ-background">
          Your name is Francis.
          You are a 35 year old single mother of an 11 year old girl with a chronic illness.
          You live in Florida and just became a citizen 6 months ago and are excited to participate in the presidential election.
          You speak and read beginner English.
        </p>
        <div className="civ-meters">
          Your meters (don't let them fall to 0!)
          <div>Money: {this.state.meters.money}</div>
          <div>Time with family: {this.state.meters.timeWithFamily}</div>
          <div>Caring about voting: {this.state.meters.caringAboutVoting}</div>
        </div>
        {
          (!this.state.gameOver && this.state.currentDecision) ?
            <div className="civ-decision">
              <p>{this.state.currentDecision.question}</p>
              <button className="civ-button" onClick={(e) => this.choose(this.state.currentDecision.choices[0])}>{this.state.currentDecision.choices[0].text}</button>
              <button className="civ-button" onClick={(e) => this.choose(this.state.currentDecision.choices[1])}>{this.state.currentDecision.choices[1].text}</button>
            </div> : <p>{this.state.gameOver ?
              "Game over: Your " + this.state.gameOverMeterNames.join(" ") + " meter(s) fell to 0. You were not able to make it to the voting polls. Refresh to start over." :
              "Congrats! You made it to the voting polls! Refresh to play again."}</p>
        }
      </div>
    );
  }

  choose(choice) {
    let gameOver = false;
    const gameOverMeterNames = [];
    const { meterDeltas } = choice;
    const newMeters = _.mapValues(this.state.meters, (meterValue, meterName) => {
      if (meterDeltas[meterName]) {
        const newMeterValue = meterValue + meterDeltas[meterName];
        if (newMeterValue <= METER_MIN) {
          gameOver = true;
          gameOverMeterNames.push(meterName);
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
      currentDecision: DECISIONS_SHUFFLED[this.state.currentDecisionIndex + 1],
      meters: newMeters,
      gameOver: gameOver,
      gameOverMeterNames: gameOverMeterNames
    });
  }
}

export default App;
