import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import {store} from '../../../redux/store';
import {Provider} from 'react-redux';


describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={ store }> <Header /> </Provider>);
  });
});
