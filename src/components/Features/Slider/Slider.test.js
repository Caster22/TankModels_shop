import React from 'react';
import { shallow } from 'enzyme';
import  ImageSlider  from './Slider';

const mockImage = 'https://b7.pngbarn.com/png/225/18/world-of-tanks-germany-self-propelled-gun-tank-destroyer-tank-png-clip-art.png';
const mockProps = [mockImage, mockImage, mockImage, mockImage];

describe('ImageSlider component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImageSlider images={mockProps} />);
    expect(component).toBeTruthy();
  });
});
