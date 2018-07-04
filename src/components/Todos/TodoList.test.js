import React from 'react'
import { shallow, configure } from 'enzyme'
import TodoList from './TodoList'

import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() });

describe('TodoList component', () => {
  const deleteMock = jest.fn()

  const props = {
    todos: [
      'this is Todo #1'
    ],
    removeTodo: deleteMock,
  }

  const component = shallow(<TodoList {...props} />)

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true)
  })

  it('Should display a todo when passed in as a prop', () => {
    expect(component.find('.task-item-title').text()).toEqual(props.todos[0])
  })

  it('Should call the removeTodo function when asn li checkox is clicked', () => {
    expect(deleteMock.mock.calls.length).toEqual(0)
    component.find('.task-checkbox').simulate('change')
    expect(deleteMock.mock.calls.length).toEqual(1)
  })
})