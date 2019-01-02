import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const NewRecipeInput = ({ name, value, placeholder, onChange, onSaveClick, uppercase }) => {
  return (
    <form name={name} onSubmit={(e) => onSaveClick(e, name)}>
      <TextField
        className="small"
        label={uppercase(name)}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      <IconButton aria-label="Delete" color="secondary">
        <AddIcon onClick={(e) => onSaveClick(e, name)} />
      </IconButton>
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
