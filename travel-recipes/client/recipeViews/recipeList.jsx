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
        <div
        className="banner"
        style={{backgroundImage: "url('/traveling/womanphotographingstupa.jpg')"}}>
        Discover the worlds most delicious vacations
        </div>

        {this.renderRecipes()}
      </div>
    );
  }
});



Recipe=React.createClass({
  render(){
    return (
      <div>
        <a href={string}>
          <div className="thumb" style={{backgroundImage: `url(${this.props.recipe.mainImage})`}}>
            <p className="name">{this.props.recipe.name} </p>
            <p>{this.props.recipe.duration}</p>
            <p>{this.props.recipe.location}</p>
            <p className="username">Created by:</p>
            <p>{this.props.recipe.userName} {this.props.recipe.dateCreatedFromNow}</p>
          </div>
        </a>
      </div>
    );
  }
});
