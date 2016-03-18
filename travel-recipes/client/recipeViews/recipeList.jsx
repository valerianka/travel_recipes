MainPage=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const text = this.props.searchValue;
    let query = {};
    if (text) query = {$or: [{name: text}, {summary: text}, {location: text}]};

    return {
      recipes: Recipes.find(query, {sort: {dateCreated: -1}}).fetch()
    };
  },

  renderRecipes(){
    return this.data.recipes.map((recipe)=>{
      return (<RecipeThumbnail key={recipe._id} recipe={recipe} />);
    });
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
        <div className="thumb" style={{height: height, backgroundImage: backgroundImage}}>
          <div className="thumb-text">
            <p className="name">{this.props.recipe.name}</p>
            <p>{this.props.recipe.duration} days in {this.props.recipe.location}</p>
            <p>created by {this.props.recipe.userName} {dateCreatedFromNow}</p>
          </div>
        </div>
      </a>
    );
  }
});
