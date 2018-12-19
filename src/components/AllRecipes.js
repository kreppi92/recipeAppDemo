import React from 'react';
import { Link } from 'react-router-dom';
import SingleRecipe from './SingleRecipe.js'
import fakeObject from '../constants/fakeObject.js'

const AllRecipes = () => {
  return (
    <div>
      <h1>Best Recipe App</h1>
      <SingleRecipe recipe={fakeObject}/>
    </div>
  );
};

export default AllRecipes;
