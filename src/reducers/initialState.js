export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
  }
}

export default {
  displayRecipes: {
    expandedView: "",
    displayRecipe: {
      description: "",
      image: "",
      ingredients: "",
      steps: "",
      dateModified: "",
    },
    newRecipeObject: {
      description: ["Entering a description will replace this value."],
      image: ["Entering an image URL above will replace this value."],
      ingredients: ["Adding a value above will add to this list. Try deleting me."],
      steps: ["Adding a value above will add to this list. Try deleting me."],
      dateModified: "1/1 21:46:14",
    },
    loadedRecipes: [
      {
        description: ["Canadian Maple Rolls (Pets-de-Soeur)"],
        dateModified: "1/1 21:46:14",
        image: ["http://s3-ca-central-1.amazonaws.com/staging-praticopratiques/app/uploads/sites/2/2018/12/14105502/pets-de-soeur-a-l-erable.jpg"],
        ingredients: ["400g Pastry Dough","200g Brown Sugar", "200ml Maple Syrup", "100ml Cream"],
        steps: [
            "Combine cream, maple syrup and brown sugar in saucepan.",
            "Roll pastry dough and slice into one inch pinwheels",
            "Arrange pinwheels in casserole dish",
            "Pour the maple sauce over the pinwheels",
            "Bake at 400C for 25 minutes and serve"
        ]
      },
      {
        description: ["Poutine (Cheesy Gravy Fries)"],
        dateModified: "1/1 21:46:14",
        image: ["https://www.macleans.ca/wp-content/uploads/2017/05/MAC06_CANADA_PROJECT_RICHLER_POST01.jpg"],
        ingredients: ["French Fries", "Cheese Curds", "Gravy"],
        steps: [
            "Deep fry french fries",
            "Place french fries in bowl",
            "Top fries with cheese curds",
            "Pour gravy over fries and cheese curds and serve",
        ]
      }
    ],
  }
};
