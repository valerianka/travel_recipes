// <template name="recipe">

//     {{> recipeItem}}

//     {{#if isUserAndCreator}}
//       {{> ingredientForm}}
//     {{/if}}
//   </div>
// </template>



// <template name="recipeItem">
//   <div id="recipe-info">
//     <h3>Visit {{location}} for {{duration}}</h3>
//     <p>{{summary}}</p>
//   </div>

//   {{#if ingredients}}
//     <div id="ingredients-list">
//       <h3>Ingredients</h3>
//       <ul>
//         {{#each ingredients}}
//           {{> ingredient}}
//         {{/each}}
//       </ul>
//     </div>
//   {{/if}}
// </template>



// <template name="ingredient">
//   {{#with currentIngredient}}
//     <details>
//       <summary id="drop-down-button">{{name}}: {{type}}</summary>
//       <ul class="additional-details">
//         <li class="ingredientPic"><img src="{{ingredientPic}}"></li>
//         <li>Start time: {{startTime}}</li>
//         <li>Duration: {{duration}}</li>
//         <li>Cost: {{cost}}</li>
//         <li>Address: {{address}}</li>
//         <li>Website: {{website}}</li>
//         <li>Notes: {{notes}}</li>
//       </ul>
//     </details>
//   {{/with}}
// </template>

DetailedView=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      recipe: Recipes.findOne({_id: FlowRouter.getParam("_id")})
    };
  },

  render(){
    if (!this.data.recipe){
      return (
        <div>
          <Banner backgroundImage={'/traveling/womanlost.jpg'} bannerText={'Recipe not found'} />

          <div className="container">
            <p>I'm sorry but that recipe doesn't exist. Maybe it was deleted?</p>
            <p>Head back to the <a href="/">homepage</a> to find a better one!</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Banner backgroundImage={this.data.recipe.mainImage} bannerText={this.data.recipe.name}/>
          <div className="container">
            <div id="recipe-info">
              <h3>Visit {this.data.recipe.location} for {this.data.recipe.duration} days</h3>
              <p>{this.data.recipe.summary}</p>
            </div>

            <IngredientsList ingredients={this.data.recipe.ingredients} />
          </div>
        </div>
      );
    }
  }
});



IngredientsList=React.createClass({
  renderIngredients(){
    return this.props.ingredients.map((ingredientId)=>{
      return (<Ingredient id={ingredientId} key={ingredientId} />);
    });
  },

  render(){
    if (!(this.props.ingredients && this.props.ingredients.length)) {
      return null;
    } else {
      return (
        <div id="ingredients-list">
          <h3>Ingredients</h3>
          <ul>
            {this.renderIngredients()}
          </ul>
        </div>
      );
    }
  }
});



Ingredient=React.createClass({
   mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      ingredient: Ingredients.findOne({_id: this.props.id.toString()})
    };
  },
  render(){
    if (this.data.ingredient) {
      const startTime=moment(this.data.ingredient.startTime).format("dddd, MMM Do YYYY, h:mm a");
      return (
        <div className='details'>
          <div id="drop-down-button">{this.data.ingredient.name}: {this.data.ingredient.type}</div>
          <ul className="additional-details">
            <li className="ingredientPic"><img src={`${this.data.ingredient.ingredientPic}`} /></li>
            <li>Start time: {startTime}</li>
              <li>Duration: {this.data.ingredient.duration}</li>
              <li>Cost: {this.data.ingredient.cost}</li>
              <li>Address: {this.data.ingredient.address}</li>
              <li>Website: {this.data.ingredient.website}</li>
              <li>Notes: {this.data.ingredient.notes}</li>
          </ul>
        </div>
      );
    } else {
      console.log('returning null');
      return null;
    }
  }
})
