import React, { Fragment } from 'react';

const NewRecipeInputDisplay = ({ arrayOfItems }) => {
    return (
        <Fragment>
            <ul>
                {arrayOfItems.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </Fragment>
    )
}

export default NewRecipeInputDisplay