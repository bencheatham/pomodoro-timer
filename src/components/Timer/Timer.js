import React, { Component } from 'react';
import styled from 'styled-components'
import _ from 'lodash/fp'

import type { TimeIntervalSchedlueItem } from './TimerBlock'

type OwnProps = {}

type ConnectedProps = {
  interval: ?TimeIntervalSchedlueItem,
  onTimerComplete: () => void
}

type State = {
  timeRemaining: number
}

type Props = OwnProps & ConnectedProps

const convertMinutesToSeconds = (minutes: number) => minutes * 60

export default class Timer extends Component<Props, State> {
  static props: Props

  state = {
    timeRemaining: 0
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.interval !== nextProps.interval) {
     this.startTimer(nextProps.interval)
    }
  }

  intervalManager: ?(...args: any[]) => void

  messages = {
    work: "Great Work!  Time to Take a Break!",
    break: "Break's Over.  Time to Work!"
  }

  startTimer = (interval: ?TimeIntervalSchedlueItem) => {
    const timeRemaining = convertMinutesToSeconds(_.getOr([0], 'timeInterval[0]', interval))
    this.setState({ timeRemaining }, () => {
      this.intervalManager = window.setInterval(this.incrementTime, 1000)
    })
  }

  incrementTime = () => {
    const timeRemaining = this.state.timeRemaining - 1

    if (timeRemaining === 0) {
      this.setState({ timeRemaining }, () => {
        window.clearInterval(this.intervalManager)
        //without setTimeout, it appears window schedules this well before the DOM update to 00
        const type = _.getOr('', 'type', this.props.interval)
        const message = _.getOr('Time is Up!', type, this.messages)
        setTimeout(() => {
          alert(message)
          this.props.onTimerComplete()
        }, 500) 
      })
    } else {
      this.setState({ timeRemaining })
    }
  }

  formatTime = () => {
    const total = this.state.timeRemaining
    const minutes = Math.floor(total / 60 % 60)
    const seconds = Math.floor(total % 60) < 10
        ? '0' + Math.floor(total % 60)
        : Math.floor(total % 60)

    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <Wrapper className="timer-wrapper">
        <p className="timer-count">
          {this.formatTime()}
        </p>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 125px;
  background-color: red;

 p {
   font-size: 72px;
   color: white;
 }
`