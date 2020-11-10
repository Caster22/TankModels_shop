import React from 'react';
import { shallow } from 'enzyme';
import { MenuBar } from './MenuBar';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';


describe('MenuBar', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={ store }> <MenuBar /> </Provider>);
  });
});
