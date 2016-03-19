if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Ingredients.find().count() === 0) {
			Meteor.call('insertIngredients');
		}

		if (Recipes.find().count() === 0) {
			Meteor.call('insertRecipes');
		}
	});
}
