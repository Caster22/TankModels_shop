import React from 'react';
import { shallow } from 'enzyme';
import { ProductBox } from './ProductBox';

describe('ProductBox component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox />);
    expect(component).toBeTruthy();
  });
});
