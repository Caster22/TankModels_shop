import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});
