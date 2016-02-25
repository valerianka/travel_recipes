Layout=React.createClass({
  render() {
    return (
      <div className="layout">
        <header>
          <a href="/"><span className="site-name">Travel Recipes</span></a>
          <Nagivation />
        </header>

        { this.props.content }
      </div>
    );
  }
});


Nagivation=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      windowWidth: rwindow.innerWidth()
    };
  },

  render(){
    if (this.data.windowWidth <= 700){
      return (
        <div id="hamburger"></div>
      );
    } else {
      return (
        <div>
          <NewRecipeButton />
          <LoginButtons />
        </div>
      );
    }
  }
});



LoginButtons=React.createClass({
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  },

  componentWillUmnount(){
    Blaze.remove(this.view);
  },

  render(){
    return (<span ref="container" />);
  }
});



NewRecipeButton=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      loggedIn: Meteor.userId()
    }
  },

  render(){
    if (!this.data.loggedIn) {
      return null;
    } else {
      return (
        <a className="button headerButton" href="/recipes/add" role="button">
           New recipe
        </a>
      );
    }
  }
});



Banner=React.createClass({
  render(){
    return (
      <div className="banner" style={ {backgroundImage: `url(${this.props.backgroundImage})`} }>
        {this.props.bannerText}
      </div>
    );
  }
});
