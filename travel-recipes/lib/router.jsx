FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {
      content: MainPage
    });
  }
});



FlowRouter.route('/recipes/:_id', {
  action: function(params) {
    ReactLayout.render(Layout, {
      content: DetailedView
    });
  }
});



FlowRouter.route('/recipe/add', {
  action: function(params) {
    ReactLayout.render(Layout, {
      content: AddNewRecipe
    });
  }
});
