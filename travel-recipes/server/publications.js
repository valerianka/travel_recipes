Meteor.publish("recipes",() => Recipes.find());

Meteor.publish("ingredients",() => Ingredients.find());
