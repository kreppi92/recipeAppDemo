import React from 'react';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import NewRecipeInput from './NewRecipeInput';

describe('<NewRecipeInput />', () => {
  let shallow;

  beforeAll(()=> {
    shallow=createShallow();
    classes= getClasses(<NewRecipeInput/>);
  });

  it('should be a form element', () => {
    const props = {
      placeholder: "description",
      onChange: jest.fn(),
      name: "description",
      value: "this is a test",
      onSaveClick: jest.fn(),
      uppercase: jest.fn(),
      label: "description"
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const inputType = wrapper.find('TextField').checkType();

    console.log(wrapper.find('TextField').checkType());

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
        label: "description"
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const changeEvent = {target: {value: "2"}};

    expect(wrapper.find('TextField').onChange).not.toBeCalled();
    wrapper.find('TextField').props().simulate('change', changeEvent);
    expect(wrapper.find('TextField').onChange).toBeCalledWith(changeEvent);
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
        label: "description"
    };

    const wrapper = shallow(<NewRecipeInput {...props} />);
    const placeholder = wrapper.find('TextField').dive().find('input').prop('placeholder');

    expect(placeholder).toEqual('test placeholder');
  });
});
