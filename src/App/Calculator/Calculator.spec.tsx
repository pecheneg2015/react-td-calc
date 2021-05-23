import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Calculator from './index';
import {Display} from './Display';
import {Keypad} from './Keypad';

describe('Calculator', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Display displayValue={wrapper.instance().state.displayValue} />,
      <Keypad
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    ])).toEqual(true);
  });

}); 