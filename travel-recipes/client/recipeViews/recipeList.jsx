MainPage=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      recipes: Recipes.find({}).fetch()
    }
  },

  renderRecipes(){
    return this.data.recipes.map((recipe) => {
      return <Recipe key={recipe._id} recipe={recipe} />;
    })

  },

  render() {
    return (
      <div>
        <Banner
          backgroundImage="/traveling/womanphotographingstupa.jpg"
          bannerText="Discover the world's most delicious vacations"
        />

        <div className="recipe-list">
          {this.renderRecipes()}
        </div>
      </div>
    );
  }
});



Recipe=React.createClass({
  render(){
    const recipeLink = `/recipes/${this.props.recipe._id}`;
    return (
      <a href={recipeLink}>
        <div className="thumb" style={{backgroundImage: `url(${this.props.recipe.mainImage})`}}>
          <p className="name">{this.props.recipe.name} </p>
          <p>{this.props.recipe.duration}</p>
          <p>{this.props.recipe.location}</p>
          <p className="username">Created by:</p>
          <p>{this.props.recipe.userName} {this.props.recipe.dateCreatedFromNow}</p>
        </div>
      </a>
    );
  }
});
