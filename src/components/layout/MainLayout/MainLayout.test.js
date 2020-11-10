import React from 'react';
import { shallow } from 'enzyme';
import { MainLayout } from './MainLayout';


describe('MainLayout', () => {
  it('renders without crashing', () => {
    shallow(<MainLayout />);
  });
});
