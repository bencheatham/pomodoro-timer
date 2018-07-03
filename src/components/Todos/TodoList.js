import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'

type OwnProps = {}

type ConnectedProps = {
  todos: string[],
  removeTodo: () => void
}

type Props = OwnProps & ConnectedProps


const TodoList = (props: Props) => {
  console.log('todos', props.todos)
  if (_.isEmpty(props.todos)) {
    
    return (
      <TodoListContainer>
        <span>You Have No Todos!</span>
      </TodoListContainer>
    )
  }

  return (
    <TodoListContainer>
      <ul>
        {props.todos.map((todo, index) => (
            <li className='task-item' key={index}>
              <div className='task-item-body'>
                <input type="checkbox" className='task-checkbox' name="complete" value="complete" id={index} checked={false} onChange={props.removeTodo}/>
                <div className='task-item-title-wrapper'>
                  <span className='task-item-title'>{todo}</span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </TodoListContainer>
  )
}

export default TodoList

const TodoListContainer = styled.div`
  margin: 15px 0 0 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li.task-item {
    height: 47px;
    list-style: none;
    margin-bottom: 2px;

    & div.task-item-body {
      background-color: #fff;
      list-style: none;
      height: 46px;
      border-radius: 3px;
      display: flex;
      padding: 0 10px;
      align-items: center;
      position: relative;
    }
  }

  div.task-item-title-wrapper {
    whitespace: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 500;
    color: #262626;
    cursor: default;
    position: relative
    padding-left: 5px;
    top: -2px;
    cursor: default;
  }

  input.task-checkbox {
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    height: 20px;
  }

`
