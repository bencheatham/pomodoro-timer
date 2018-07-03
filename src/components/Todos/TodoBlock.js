import React, { Component } from 'react'
import styled from 'styled-components'
import { remove } from 'lodash'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

type OwnProps = {}

type ConnectedProps = {}

type Props = OwnProps & ConnectedProps

type State = {
  todos: string[]
}

export default class TodoBlock extends Component<Props, State> {

  state = {
    todos: []
  }

  createNewTodo = (todo: string) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })

  }

  removeTodo = (e) => {
    const updatedTodos = [...this.state.todos].filter((todo, idx) => idx != e.target.id)
    this.setState({ todos: updatedTodos })
  }

  render() {
    return (
      <TodoBlockWrapper>
        <AddTodo createNewTodo={this.createNewTodo}/>
        <TodoList todos={this.state.todos}  removeTodo={this.removeTodo}/>
      </TodoBlockWrapper>
    )
  }
}

const TodoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  background-color: grey;
  padding: 25px;
`