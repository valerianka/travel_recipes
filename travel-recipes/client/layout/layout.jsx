Layout=React.createClass({
  render() {
    return (
      <div className="layout">
        <header>
          <a href="/"><span className="site-name">Travel Recipes</span></a>
          <Hamburger />
        </header>

        { this.props.content }
      </div>
    );
  }
});


Hamburger=React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      loggedIn: Meteor.userId()
    };
  },

  getInitialState(){
    return {
      menuVisible: false
    };
  },

  toggleMenu(){
    this.setState({menuVisible: !this.state.menuVisible});
  },

  render(){
    if (!this.data.loggedIn){
      return (
        <LoginButtons />
      );
    } else {
      return (
        <div>
          <div id="hamburger" onClick={this.toggleMenu}></div>
          <HamburgerMenu menuVisible={this.state.menuVisible}/>
        </div>
      );
    }
  }
});



HamburgerMenu=React.createClass({
  render(){
    if (!this.props.menuVisible){
      return null;
    } else {
      return (
        <div className="hamburger-menu">
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
        <a className="button hamburger-menu-button" href="/recipes/add">
           New recipe
        </a>
      );
    }
  }
});



Banner=React.createClass({
  render(){
    return (
      <div className="banner">
        <div className="banner-text">
          {this.props.bannerText}
        </div>

        <div className="banner-overlay"></div>

        <div
          className="banner-image"
          style={{backgroundImage: `url(${this.props.backgroundImage})`}}
        >
        </div>
      </div>
    );
  }
});
