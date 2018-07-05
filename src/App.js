import React, { Component } from 'react';
import _ from 'lodash/fp'
import styled from 'styled-components'

import TimerBlock from './components/Timer/TimerBlock'
import TodoBlock from './components/Todos/TodoBlock'
import Header from './components/Header'


const App = () => (
  <AppWrapper>
    <Header />
    <TimerBlock />
    <TodoBlock />
  </AppWrapper>
)

export default App;

const AppWrapper = styled.div`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 800px;
  margin: 0 auto;
`