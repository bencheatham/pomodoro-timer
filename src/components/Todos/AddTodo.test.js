import React from 'react'
import AddTodo from './AddTodo'
import sinon from 'sinon'
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() });

jest.useFakeTimers()

describe("AddTodo", () => {
  let mountedTodoBlock
  const addTodoMock = jest.fn()

  const addTodo = () => {
    if (!mountedTodoBlock) {
      mountedTodoBlock = mount(
        <AddTodo createNewTodo={addTodoMock}/>
      );
    }
    return mountedTodoBlock;
  }

  beforeEach(() => {
    mountedTodoBlock = undefined;
  })

  it('Should render successfully', () => {
    expect(addTodo().exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(addTodo().find('input').length).toEqual(1);
  });

  it('renders 1 div when mounted', () => {
    expect(addTodo().find('div').length).toBe(1)
  })

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(addTodo().find('.todo-submit').length).toEqual(1);
    });

    it('renders a <button>', () => {
      expect(addTodo().find('button')).toBeDefined();
    });

    it('Should not call the submitTodo function when clicked without input text', () => {
      expect(addTodoMock.mock.calls.length).toEqual(0);
      addTodo().find('button').simulate('click');
      expect(addTodoMock.mock.calls.length).toEqual(0);
    });

    it('Should not call the submitTodo function when clicked without input text', () => {
      expect(addTodoMock.mock.calls.length).toEqual(0);
      addTodo().setState({inputFormTodo: 'hi there'})
      expect(addTodo().state().inputFormTodo).toBe('hi there')
      addTodo().find('button').simulate('click')
      expect(addTodoMock).toHaveBeenCalled()
      expect(addTodoMock.mock.calls.length).toEqual(1)
    });

    it('Should be disabled when there is no text in the input', () => {
      const disabled = addTodo().find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is text in the input', () => {
      addTodo().setState({inputFormTodo: 'hi there'})
      expect(addTodo().state().inputFormTodo).toBe('hi there')
      expect(addTodo().find('.todo-submit').html().includes('disabled=""')).toEqual(false);
    });
  });
})