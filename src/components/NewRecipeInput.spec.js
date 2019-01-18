import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import NewRecipeInput from './NewRecipeInput';

describe('<NewRecipeInput />', () => {
  let shallow;

  beforeAll(()=> {
    shallow=createShallow();
  });

  it('should be a TextField of text type', () => {
    const props = {
      placeholder: "description",
      onChange: jest.fn(),
      name: "description",
      value: "this is a test",
      onSaveClick: jest.fn(),
      uppercase: jest.fn(),
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const inputType = wrapper.find('TextField').props().type;

    expect(inputType).toEqual('text');
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
    const changeEvent = {target: {value: "2"}};

    expect(wrapper.find('TextField').props().onChange).not.toBeCalled();
    wrapper.find('TextField').simulate('change', changeEvent);
    expect(wrapper.find('TextField').props().onChange).toBeCalledWith(changeEvent);
  });

  // Example of testing the value of a prop
  it('should check placeholder', () => {
    const props = {
        placeholder: 'test placeholder',
        onChange: jest.fn(),
        name: "description",
        value: ["this is a test"],
        onSaveClick: jest.fn(),
        uppercase: jest.fn(),
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const placeholder = wrapper.find('TextField').props().placeholder;

    expect(placeholder).toEqual('test placeholder');
  });
});
