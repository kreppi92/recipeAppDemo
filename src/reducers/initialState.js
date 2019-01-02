export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Error in Load State")
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log("Error in Save State")
  }
}

export default {
  displayRecipes: {
    displayRecipe: {
      description: "",
      ingredients: "",
      steps: "",
      dateModified: "",
    },
    newRecipeObject: {
      description: [],
      ingredients: [],
      steps: [],
      dateModified: "",
    },
    loadedRecipes: [
      {
        description: ["Canadian Maple Rolls (Pets-de-Soeur)"],
        dateModified: "1/1 21:46:14",
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
