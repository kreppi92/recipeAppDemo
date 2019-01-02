import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const NewRecipeInputDisplay = ({ name, arrayOfItems, onDelete }) => {
    return (
            <List>
                {arrayOfItems.map((item, index) =>
                    <Fragment key={index}>
                        <ListItem>
                            <ListItemText
                                primary={item}
                            />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon onClick={(e) => onDelete(e, name, index)}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Fragment>
                )}
            </List>
    )
}

const { array, func } = PropTypes;

NewRecipeInputDisplay.propTypes = {
    arrayOfItems: array.isRequired,
    onDelete: func.isRequired
};

export default NewRecipeInputDisplay