MainPage=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      recipes: Recipes.find({}).fetch()
    }
  },

  renderRecipes(){
    return this.data.recipes.map((recipe)=>{
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
    let backgroundImage = `url('/tripicon.png')`;
    if (this.props.recipe.mainImage) backgroundImage = `url(${this.props.recipe.mainImage})`;
    const dateCreatedFromNow = moment(this.props.recipe.dateCreated).fromNow();

    return (
      <a href={recipeLink}>
        <div className="thumb-wrapper" style={{height: height}}>
          <div className="thumb-text">
            <p className="name">{this.props.recipe.name}</p>
            <p>{this.props.recipe.duration} days long</p>
            <p>in {this.props.recipe.location}</p>
            <p>created by {this.props.recipe.userName}</p>
            <p>{dateCreatedFromNow}</p>
          </div>

          <div className="thumb-overlay"></div>

          <div className="thumb-image" style={{backgroundImage: backgroundImage}}></div>
        </div>
      </a>
    );
  }
});
