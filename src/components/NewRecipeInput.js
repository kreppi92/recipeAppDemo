import React from 'react';
import PropTypes from 'prop-types';

const NewRecipeInput = ({name, value, placeholder, onChange, onSaveClick}) => {
  return (
    <form>
    <input
      className="small"
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
      <input type="submit" value="ADD" onClick={onSaveClick}/>
    </form>
  );
};

const { string, func, number, oneOfType } = PropTypes;

NewRecipeInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  onSaveClick: func.isRequired,
  placeholder: string,
  value: oneOfType([
    string,
    number
  ])
};

export default NewRecipeInput;
