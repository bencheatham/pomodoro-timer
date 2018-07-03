//@flow
import React, { Component } from 'react';
import styled from 'styled-components'

type OwnProps = {}

type ConnectedProps = {
  startTimer: () => void
}

type Props = OwnProps & ConnectedProps

const TimerControls = (props: Props) => (
  <Wrapper className="timer-wrapper">
    <button className="start-timer-button" onClick={props.startTimer}>
      Start
    </button>
  </Wrapper>
)

export default TimerControls

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;

 button.start-timer-button {
   font-size: 72px;
   color: white;
   width: 150px;
   height: 150px;
   background-color: grey;
 }

`