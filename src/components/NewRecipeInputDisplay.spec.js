import React from 'react';
import { shallow } from 'enzyme';
import NewRecipeInput from './NewRecipeInput';

describe('<NewRecipeInput />', () => {
  it('should be an input element', () => {
    const props = {
      ingredients: 'testName',
      onChange: jest.fn(),
      steps: 'Type Here',
      description: 100
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const inputType = wrapper.type();
    expect(inputType).toEqual('input');
  });

  it('should handle change', () => {
    const props = {
      ingedients: 'newMpg',
      onChange: jest.fn(),
      steps: null,
      description: 100
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const changeEvent = {target: {value: 101}};

    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', changeEvent);
    expect(props.onChange).toBeCalledWith(changeEvent);
  });

  // Example of testing the value of a prop
  it('should apply placeholder', () => {
    const props = {
      name: 'newMpg',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const placeholder = wrapper.find('input').prop('placeholder');
    expect(placeholder).toEqual('Type Here');
  });
});
