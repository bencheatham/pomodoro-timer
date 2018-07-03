import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer'
import TimerControls from './components/TimerControls'

import styled from 'styled-components'


type Props = {}

type State = {
  timerIsRunning: boolean,
  intervalTime: number[]
}

class App extends Component<Props, State> {

  state = {
    timerIsRunning: false,
    intervalTime: [0]
  }

  timeIntervalSchedule = [[25], [3, 5], [25], [3, 5], [25], [3, 5], [25], [15, 30]]

  onStartTimer = () => {
   this.setState({
     timerIsRunning: true,
     intervalTime: this.timeIntervalSchedule.shift()
   })
  }

  onTimerComplete = () => {
    if(this.timeIntervalSchedule) {
     window.alert('time is up!')
     this.setState({
      intervalTime: this.timeIntervalSchedule.pop()
     })
    }
  }


  render() {
    return (
      <AppWrapper>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Timer 
          intervalTime={this.state.intervalTime}
          timerIsRunning={this.state.timerIsRunning}
          onTimerComplete={this.onTimerComplete}  
        />
        <TimerControls 
          startTimer={this.onStartTimer}
          />
      </div>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
