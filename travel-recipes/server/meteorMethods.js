Meteor.methods({
  updateRecipes(){
    Recipes.update(
      {},
      {$set: {ingredients: _.pluck(Ingredients.find().fetch(), "_id")}},
      {multi: true}
    );
  },

  deleteRecipe(id){ Recipes.remove(id); },
  deleteRecipes(){ Recipes.remove({}); },

  deleteIngredient(id){ Ingredients.remove(id); },
  deleteIngredients(){ Ingredients.remove({}); }
});
