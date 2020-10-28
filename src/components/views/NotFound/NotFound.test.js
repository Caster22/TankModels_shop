import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './NotFound';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />);
  });
});
