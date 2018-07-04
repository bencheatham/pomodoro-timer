import React from 'react'
import TodoBlock from './TodoBlock'
import sinon from 'sinon'
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() });

jest.useFakeTimers()

describe("TodoBlock", () => {
  let props;
  let mountedTodoBlock;
  const todoBlock = () => {
    if (!mountedTodoBlock) {
      mountedTodoBlock = mount(
        <TodoBlock {...props} />
      );
    }
    return mountedTodoBlock;
  }

  beforeEach(() => {
    props = {
      interval: undefined,
      onTimerComplete: jest.fn()
    };
    mountedTodoBlock = undefined;
  })

  it('renders 3 divs when mounted', () => {
    expect(todoBlock().find('div').length).toBe(3)
  })
})

