import React from 'react';
import { shallow } from 'enzyme';
import { MenuBar } from './MenuBar';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<MenuBar />);
  });
});
