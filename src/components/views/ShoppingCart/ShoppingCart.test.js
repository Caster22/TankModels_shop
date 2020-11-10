import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from './ShoppingCart';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Cart component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Provider store={ store }><Cart  /></Provider>);
    expect(component).toBeTruthy();
  });
});
