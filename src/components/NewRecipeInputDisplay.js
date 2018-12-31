import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NewRecipeInputDisplay = ({ name, arrayOfItems, onDelete }) => {
    return (
        <Fragment>
            <ul>
                {arrayOfItems.map((item, index) =>
                    <Fragment key={index}>
                        <li>{item}{" "}
                        <input type="submit" value="X" onClick={(e) => onDelete(e, index)} name={name} className="cancelButton"/>
                        </li>
                    </Fragment>
                )}
            </ul>
        </Fragment>
    )
}

const { array, func } = PropTypes;

NewRecipeInputDisplay.propTypes = {
    arrayOfItems: array.isRequired,
    onDelete: func.isRequired
};

export default NewRecipeInputDisplay