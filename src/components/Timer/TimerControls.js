import React, { Component } from 'react';
import styled from 'styled-components'

type OwnProps = {}

type ConnectedProps = {
  startNextTimerInterval: () => void
}

type Props = OwnProps & ConnectedProps

const TimerControls = (props: Props) => (
  <Wrapper className="timer-wrapper">
    <button className="start-timer-button" onClick={props.startNextTimerInterval}>
      Start
    </button>
  </Wrapper>
)

export default TimerControls

const Wrapper = styled.div`
  width: 50%;
  height: 125px;
  background-color: blue;

 button.start-timer-button {
   font-size: 72px;
   color: white;
   width: 100%;
   height: 100%;
   background-color: #4CAF50;
   cursor: pointer;
 }
`