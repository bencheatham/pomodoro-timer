//@flow
import React, { Component } from 'react';
import styled from 'styled-components'

type OwnProps = {}

type ConnectedProps = {
  intervalTime: number[],
  timerIsRunning: boolean,
  onTimerComplete: () => void
}

type State = {
  timeRemaining: number
}

type Props = OwnProps & ConnectedProps

const convertMinutesToSeconds = (minutes: number) => {
  return minutes * 60
}

export default class Timer extends Component<Props, State> {
  
  static props: Props

  state = {
    timeRemaining: convertMinutesToSeconds(this.props.intervalTime[0])
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.intervalTime !== nextProps.intervalTime) {
      this.setState({
        timeRemaining: convertMinutesToSeconds(nextProps.intervalTime[0])
      }, () => this.startTimer())
    }
  }

  intervalManager: ?(...args: any[]) => void

  startTimer = () => {
    this.intervalManager = window.setInterval(this.incrementTime, 1000)
    //test this function is only called once, even when button is hit multiple times
  }

  incrementTime = () => {
    const newTimeRemaining = this.state.timeRemaining - 1

    if (newTimeRemaining === 0) {
      window.clearInterval(this.intervalManager)
      this.props.onTimerComplete()
    } else {
      this.setState({ timeRemaining: newTimeRemaining })
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
  width: 200px;
  height: 200px;
  background-color: red;

 p {
   font-size: 72px;
   color: white;
 }

`