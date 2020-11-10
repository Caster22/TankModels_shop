import React from 'react';
import { shallow } from 'enzyme';
import Newsletter from './Newsletter';

describe('Newsletter component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Newsletter />);
    expect(component).toBeTruthy();
  });
});
