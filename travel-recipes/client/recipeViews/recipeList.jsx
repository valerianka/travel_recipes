MainPage=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      recipes: Recipes.find({}).fetch()
    }
  },

  renderRecipes(){
    return this.data.recipes.map((recipe) => {
      return <RecipeThumbnail key={recipe._id} recipe={recipe} />;
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



RecipeThumbnail=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      windowWidth: rwindow.innerWidth()
    }
  },

  render(){
    const recipeLink = `/recipes/${this.props.recipe._id}`;
    const height = calculateHeight(this.data.windowWidth);
    const backgroundImage = `url(${this.props.recipe.mainImage})`;
    return (
      <a href={recipeLink}>
        <div
          className="thumb-wrapper"
        >
          <div
            className="thumb"
            style={{height: height, backgroundImage: backgroundImage}}
          >
            <p className="name">{this.props.recipe.name} </p>
            <p>{this.props.recipe.duration}</p>
            <p>{this.props.recipe.location}</p>
            <p className="username">Created by:</p>
            <p>{this.props.recipe.userName} {this.props.recipe.dateCreatedFromNow}</p>
          </div>
        </div>
      </a>
    );
  }
});
