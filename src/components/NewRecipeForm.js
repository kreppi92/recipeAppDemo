import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NewRecipeInput from './NewRecipeInput';
import { displayRecipes } from '../types';
import NewRecipeInputDisplay from './NewRecipeInputDisplay';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { withStyles } from '@material-ui/core/styles';

const arrayOfElements = ["description", "image", "ingredients", "steps"]

const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = theme => ({
  card: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class NewRecipeForm extends React.Component {

  render() {
    const { classes, displayRecipes, onSaveClick, onChange, onDelete, onSaveRecipe, clearRecipe } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
                        </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={displayRecipes.newRecipeObject.description}
          subheader={displayRecipes.newRecipeObject.dateModified}
        />
        <CardContent>
          {arrayOfElements.map((element, index) => {
            return (
              <Fragment key={index}>
                <NewRecipeInput placeholder={element} onChange={onChange} name={element} value={displayRecipes.displayRecipe[element]} onSaveClick={onSaveClick} uppercase={uppercaseFirstLetter} />
                <NewRecipeInputDisplay name={element} arrayOfItems={displayRecipes.newRecipeObject[element]} onDelete={onDelete} />
              </Fragment>
            )
          })}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button onClick={e => onSaveRecipe(e)} size="medium" variant="contained" color="secondary" className={classes.button}>
              SAVE
          <SaveIcon />
            </Button>
          </Link>
          <Button onClick={e => clearRecipe(e)} size="medium" variant="contained" className={classes.button}>
            CLEAR
          <ClearIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }

}

const { object, func } = PropTypes;

NewRecipeForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  onSaveRecipe: func.isRequired,
  clearRecipe: func.isRequired,
  displayRecipes: displayRecipes.isRequired,
  classes: object.isRequired,
  onDelete: func.isRequired
}

export default withStyles(styles)(NewRecipeForm);