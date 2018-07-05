import React, { Component } from 'react';
import _ from 'lodash/fp'
import styled from 'styled-components'

import Timer from './Timer'
import TimerControls from './TimerControls'

type TimeIntervals = Array<number>

export type TimeIntervalSchedlueItem = {
  type: 'work' | 'break',
  timeInterval: TimeIntervals,
}

type ConnectedProps = {}

type OwnProps = {}

type Props = OwnProps & ConnectedProps

type State = {
  intervalTime: ?TimeIntervalSchedlueItem,
  timerIsRunning: boolean
}

class TimerBlock extends Component<Props, State> {
  static props: Props
  
  state = {
    intervalTime: null,
    timerIsRunning: false
  }

  componentWillMount() {
    this.loadNewIntervalSchedule()
  }

  timeIntervalScheduleMaster: TimeIntervalSchedlueItem[] = [
    { 
      type: 'work',
      timeInterval: [25]
    },
    {
      type: 'break',
      timeInterval: [3, 5]
    },
    {
      type: 'work',
      timeInterval: [25]
    },
    {
      type: 'break',
      timeInterval: [3, 5]
    },
    {
      type: 'work',
      timeInterval: [25]
    },
    {
      type: 'break',
      timeInterval: [3, 5]
    },
    {
      type: 'work',
      timeInterval: [25]
    },
    {
      type: 'break',
      timeInterval: [15, 30]
    }
  ]

  /* The below data is available to test interval transitions using much smaller intervals  */
  /* Simply uncomment the data below, and comment out the data above */
  // timeIntervalScheduleMaster: TimeIntervalSchedlueItem[] = [
  //   {
  //     type: 'work',
  //     timeInterval: [0.1]
  //   },
  //   {
  //     type: 'break',
  //     timeInterval: [0.1, 0.2]
  //   }
  // ]

  timeIntervalSchedule: TimeIntervalSchedlueItem[] = []

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

