import React from 'react';
import { shallow } from 'enzyme';
import { ModelView } from './ModelView';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

describe('ModelView component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Provider store={ store }><ModelView /></Provider>);
    expect(component).toBeTruthy();
  });
});
