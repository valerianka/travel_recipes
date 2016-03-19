Meteor.methods({
  deleteRecipe(id){ Recipes.remove(id); },
  deleteRecipes(){ Recipes.remove({}); },

  deleteIngredient(id){ Ingredients.remove(id); },
  deleteIngredients(){ Ingredients.remove({}); },

  updateRecipes(){
    Meteor.call('deleteRecipes');
    Meteor.call('deleteIngredients');
  },
});
