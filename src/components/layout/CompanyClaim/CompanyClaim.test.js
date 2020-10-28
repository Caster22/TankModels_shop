import React from 'react';
import { shallow } from 'enzyme';
import { CompanyClaim } from './CompanyClaim';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<CompanyClaim />);
  });
});
