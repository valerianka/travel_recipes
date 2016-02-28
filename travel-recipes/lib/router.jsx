FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {
      content: <MainPage />
    });
  }
});



FlowRouter.route('/recipes/:_id', {
  action: function(params) {
    const recipe = Recipes.findOne(params._id);
    ReactLayout.render(Layout, {
      content: <DetailedView recipe={recipe} />
    });
  }
});


// Router.route("/recipes/add", {
//   name: "recipeForm"
// });


