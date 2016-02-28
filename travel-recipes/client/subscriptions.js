FlowRouter.subscriptions = function() {
  this.register('userRecipes', Meteor.subscribe("recipes"));
  this.register('userIngredients', Meteor.subscribe("ingredients"));
};
  