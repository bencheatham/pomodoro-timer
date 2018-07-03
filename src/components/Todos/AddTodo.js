import React, { Component } from 'react'
import styled from 'styled-components'

type OwnProps = {}

type ConnectedProps = {
  createNewTodo: (todo: string) => void
}

type Props = OwnProps & ConnectedProps

type State = {
  inputFormTodo: string
}

export default class AddTodo extends Component<Props, State> {

  state = {
    inputFormTodo: ''
  }

  handleInputFormChange = (e: any) => {
    this.setState({
      inputFormTodo: e.target.value
    })
  }

  render() {
    console.log('inputFormTodo', this.state.inputFormTodo)
    return (
      <AddTodoContainer>
        <AddTodoInput 
          type='text'
          name='todo-add' 
          onChange={this.handleInputFormChange}
          value={this.state.inputFormTodo}
        />
        <button type='submit' onClick={() => this.props.createNewTodo(this.state.inputFormTodo)}>Add Todo</button>
      </AddTodoContainer>
    )
  }
}

const AddTodoContainer = styled.div`
  width: 100%;
  height: 47px;
  padding: 0 20px;

  button {
    height: 100%;
    border-radius: 20px;
    background-color: black;
    color: white;
    border: none;
    width: 100px;
  }
`

const AddTodoInput = styled.input`
  width: 70%;
  height: 100%;
  border-radius: 5px;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 500;
  color: #262626;
`