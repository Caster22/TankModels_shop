import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './Form';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Form component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Provider store={ store }><Form  /></Provider>);
    expect(component).toBeTruthy();
  });
});
