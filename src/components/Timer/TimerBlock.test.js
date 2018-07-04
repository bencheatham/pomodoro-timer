import React from 'react'
import TimerBlock from './TimerBlock'
import Timer from './Timer'
import TimerControls from './Timer'
import sinon from 'sinon'
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() });

jest.useFakeTimers()

describe("TimerBlock", () => {
  let props;
  let mountedTimerBlock;
  const timerBlock = () => {
    if (!mountedTimerBlock) {
      mountedTimerBlock = mount(
        <TimerBlock {...props} />
      );
    }
    return mountedTimerBlock;
  }

  beforeEach(() => {
    props = {
      interval: undefined,
      onTimerComplete: jest.fn()
    };
    mountedTimerBlock = undefined;
  })

  it('renders 3 divs when mounted', () => {



    props.interval = [
      {
        type: 'work',
        timeInterval: [0.1]
      },
      {
        type: 'break',
        timeInterval: [0.1, 0.2]
      }
    ]

    expect(timerBlock().find('div').length).toBe(3)

  
  })

  it('should update timerIsRunning state to tru when button is clicked', () => {
    expect(timerBlock().state().timerIsRunning).toEqual(false)
    timerBlock().find('button').simulate('click')
    expect(timerBlock().state().timerIsRunning).toEqual(true)
  })

  it('should change the intervalTime state after 1 click', () => {
    expect(timerBlock().state().intervalTime).toEqual(null)
    timerBlock().find('button').simulate('click')
    expect(timerBlock().state().intervalTime).toEqual({"timeInterval": [0.1], "type": "work"})
  })

  it('should not change the intervalTime state with more than 1 click', () => {
    expect(timerBlock().state().intervalTime).toEqual(null)
    timerBlock().find('button').simulate('click')
    expect(timerBlock().state().intervalTime).toEqual({"timeInterval": [0.1], "type": "work"})
    timerBlock().find('button').simulate('click')
    expect(timerBlock().state().intervalTime).toEqual({"timeInterval": [0.1], "type": "work"})
    timerBlock().find('button').simulate('click')
    expect(timerBlock().state().intervalTime).toEqual({"timeInterval": [0.1], "type": "work"})
  })

})

