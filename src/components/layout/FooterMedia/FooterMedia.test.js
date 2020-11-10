import React from 'react';
import { shallow } from 'enzyme';
import { FooterMedia } from './FooterMedia';


describe('FooterMedia', () => {
  it('renders without crashing', () => {
    shallow(<FooterMedia />);
  });
});
