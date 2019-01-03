import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';

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

class SingleRecipe extends React.Component {
    state = { expanded: false };

    render() {
        const { classes, recipe, recipeIndex, deleteRecipe, editRecipe, expandedView, handleExpandView } = this.props;

        return (
            <div>
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
                        title={recipe.description}
                        subheader={recipe.dateModified}
                    />
                    <CardMedia
                        className={classes.media}
                        image={recipe.image[0]}
                        title={recipe.description}
                    />
                    <CardContent>
                        <Typography className={classes.pos} color="textSecondary">
                            Ingredients
                        </Typography>
                        <Typography component="ul">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient}
                                </li>
                            ))}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <Link to="/NewRecipe">
                            <IconButton aria-label="Edit">
                                <EditIcon onClick={(e) => editRecipe(e, recipeIndex)} />
                            </IconButton>
                        </Link>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={(e) => deleteRecipe(e, recipeIndex)} />
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: (expandedView === recipeIndex),
                            })}
                            onClick={(e) => handleExpandView(e, recipeIndex)}
                            aria-expanded={(expandedView === recipeIndex)}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expandedView === recipeIndex} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography className={classes.pos} color="textSecondary">
                            Steps
                        </Typography>
                            <Typography component="ul">
                                {recipe.steps.map((step, index) => (
                                    <li key={index}>
                                        {step}
                                    </li>
                                ))}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

const { object, func, number } = PropTypes;

SingleRecipe.propTypes = {
    classes: object.isRequired,
    recipe: object.isRequired,
    recipeIndex: number.isRequired,
    deleteRecipe: func.isRequired,
    editRecipe: func.isRequired
};

export default withStyles(styles)(SingleRecipe);