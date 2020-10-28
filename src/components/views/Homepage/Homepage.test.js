import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from './Homepage';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});
