import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {Key} from '.';

describe('Key', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = shallow(
      <Key
        keyAction={jest.fn()}
        keyType={''}
        keyValue={''}
      />
    );
  });
  
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the value of keyValue', () => {
    wrapper.setProps({ keyValue: 'test' });
    expect(wrapper.text()).toEqual('test');
  });

});