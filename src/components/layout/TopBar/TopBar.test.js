import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from './TopBar';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<TopBar />);
  });
});
