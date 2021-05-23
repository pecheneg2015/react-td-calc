import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './index';
import {Calculator} from './Calculator';

describe('App', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});