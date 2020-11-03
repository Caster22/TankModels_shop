import React from 'react';
import { shallow } from 'enzyme';
import { FooterInfo } from './FooterInfo';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<FooterInfo />);
  });
});
