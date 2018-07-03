import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <HeaderContainer className="app-header">
      <h1 className="app-title">Pomodoros Timer with Todo's</h1>
  </HeaderContainer>
)

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  height: 75px;
  width: 100%;
  padding: 20px;
  color: white;
  vertical-align: center;

  .app-title {
    font-size: 1.5em;
  }
`