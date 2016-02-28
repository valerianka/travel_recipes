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
  render(){
    console.log(this.props);
    return null;
      // <div>.
        // <Banner backgroundImage={this.props.recipe.mainImage} bannerText={this.props.recipe.name}/>
        //  <div className="container">
        //    <div id="recipe-info">
        //      <h3>Visit {this.props.recipe.location} for {this.props.recipe.duration}</h3>
        //       <p>{this.props.recipe.summary}</p>
        //     </div>

        //     //<Ingredients ingredients={this.props.recipe.ingredients}/>
        //  </div>
      // </div>
    // );
  }
});

// Ingredients=React.createClass({
//   renderIngredients(){
//     return this.props.ingredients.map((ingredient) => {
//       return <Ingredient ingredient={ingredient}/>
//     });
//   },

//   render(){
//     if (!this.props.ingredients.length) {
//       return null;
//     } else {
//       return <div id="ingredients-list">
//               <h3>Ingredients</h3>
//               <ul>
//                 {this.renderIngredients()}
//               </ul>
//             </div>;
//     }
//   }
// });
// Ingredient=React.createClass({
//   render(){
//     return null;
//   }
// })
