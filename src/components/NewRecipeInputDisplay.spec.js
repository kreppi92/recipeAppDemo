import React from 'react';
import { shallow } from 'enzyme';
import NewRecipeInput from './NewRecipeInput';

describe('<NewRecipeInput />', () => {
  it('should be an input element', () => {
    const props = {
      placeholder: "description",
      onChange: jest.fn(),
      name: "description",
      value: "this is a test",
      onSaveClick: jest.fn(),
      uppercase: jest.fn(),
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const inputType = wrapper.type();

    expect(inputType).toEqual('form');
  });

  it('should handle change', () => {
    const props = {
        placeholder: "description",
        onChange: jest.fn(),
        name: "description",
        value: "1",
        onSaveClick: jest.fn(),
        uppercase: jest.fn(),
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const changeEvent = {target: {value: "11"}};

    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', changeEvent);
    expect(props.onChange).toBeCalledWith(changeEvent);
  });

  // Example of testing the value of a prop
  it('should apply placeholder', () => {
    const props = {
        placeholder: 'test placeholder',
        onChange: jest.fn(),
        name: "description",
        value: ["this is a test"],
        onSaveClick: jest.fn(),
        uppercase: jest.fn(),
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const placeholder = wrapper.find('input').prop('placeholder');

    expect(placeholder).toEqual('test placeholder');
  });
});
