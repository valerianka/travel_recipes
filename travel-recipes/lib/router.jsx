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



DetailedView=React.createClass({
  render(){
    return <span>Recipe</span>;
  }
});
// Router.route("/recipes/add", {
//   name: "recipeForm"
// });

// Router.route("/recipes/:_id", {
//   name: "recipe",
//   data() {
//     var recipe = Recipes.findOne(this.params._id);
//     return recipe;
//   }
// });
