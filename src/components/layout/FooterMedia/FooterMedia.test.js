import React from 'react';
import { shallow } from 'enzyme';
import { FooterMedia } from './FooterMedia';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<FooterMedia />);
  });
});
