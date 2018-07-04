import React, { Component } from 'react';
import _ from 'lodash/fp'

import Timer from './Timer'
import TimerControls from './TimerControls'

import styled from 'styled-components'


type Props = {}

type TimeIntervals = Array<number>

export type TimeIntervalSchedlueItem = {
  type: 'work' | 'break',
  timeInterval: TimeIntervals,
}

type TimeIntervalSchedlue = Array<TimeIntervalSchedlueItem>

type State = {
  intervalTime: ?TimeIntervalSchedlueItem,
  timerIsRunning: boolean
}

class TimerBlock extends Component<Props, State> {

  state = {
    intervalTime: null,
    timerIsRunning: false
  }

  componentWillMount() {
    this.loadNewIntervalSchedule()
  }

  //timeIntervalSchedule = [[25], [3, 5], [25], [3, 5], [25], [3, 5], [25], [15, 30]]
  //timeIntervalSchedule = [[0.1], [0.1, 0.2], [0.3], [0.1, 0.2], [0.3], [0.1, 0.2], [0.3], [0.1, 0.2]]
  
  // timeIntervalSchedule = [
  //   { 
  //     type: 'work',
  //     timeInterval: [25]
  //   },
  //   {
  //     type: 'break',
  //     timeInterval: [3, 5]
  //   },
  //   {
  //     type: 'work',
  //     timeInterval: [25]
  //   },
  //   {
  //     type: 'break',
  //     timeInterval: [3, 5]
  //   },
  //   {
  //     type: 'work',
  //     timeInterval: [25]
  //   },
  //   {
  //     type: 'break',
  //     timeInterval: [15, 30]]
  //   }
  // ]


  timeIntervalScheduleMaster: TimeIntervalSchedlue = [
    {
      type: 'work',
      timeInterval: [0.1]
    },
    {
      type: 'break',
      timeInterval: [0.1, 0.2]
    }
  ]

  timeIntervalSchedule: TimeIntervalSchedlue = []

  loadNewIntervalSchedule = () => {
    this.timeIntervalSchedule = [...this.timeIntervalScheduleMaster]
  }

  startNextTimerInterval = () => {
    if (!this.state.timerIsRunning) {
      this.setState({ 
        intervalTime: this.timeIntervalSchedule.shift(),
        timerIsRunning: true 
      })
    }
  }

  onTimerComplete = () => {
    this.setState({
      timerIsRunning: false
    }, () => {
      if(!_.isEmpty(this.timeIntervalSchedule)) {
        this.startNextTimerInterval()
       } else {
         this.loadNewIntervalSchedule()
       }
    })
  }

  render() {
    return (
      <TimerContainer className='timer-container'>
        <Timer 
          interval={this.state.intervalTime}
          onTimerComplete={this.onTimerComplete}  
        />   
        <TimerControls 
          startNextTimerInterval={this.startNextTimerInterval}
        />
      </TimerContainer>
    );
  }
}

export default TimerBlock;

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
  height: auto;
`

