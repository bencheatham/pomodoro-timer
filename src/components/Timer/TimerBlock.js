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
  intervalTime: ?TimeIntervalSchedlueItem
}

class TimerBlock extends Component<Props, State> {

  state = {
    intervalTime: null
  }

  componentWillMount() {
    this.loadNewIntervalSchedule()
  }

  //timeIntervalSchedule = [[25], [3, 5], [25], [3, 5], [25], [3, 5], [25], [15, 30]]
  //timeIntervalSchedule = [[0.1], [0.1, 0.2], [0.3], [0.1, 0.2], [0.3], [0.1, 0.2], [0.3], [0.1, 0.2]]
  
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
   this.setState({ intervalTime: this.timeIntervalSchedule.shift() })
  }

  onTimerComplete = () => {
    if(!_.isEmpty(this.timeIntervalSchedule)) {
     this.startNextTimerInterval()
    } else {
      this.loadNewIntervalSchedule()
    }
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

