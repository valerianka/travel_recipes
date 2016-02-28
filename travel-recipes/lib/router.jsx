FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {
      content: <MainPage />
    });
  }
});



FlowRouter.route('/recipes/:_id', {
  action: function(params) {
    ReactLayout.render(Layout, {
      content: <DetailedView _id={params._id} />
    });
  }
});


// Router.route("/recipes/add", {
//   name: "recipeForm"
// });
