import React from 'react';
import { shallow } from 'enzyme';
import { MainLayout } from './MainLayout';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<MainLayout />);
  });
});
