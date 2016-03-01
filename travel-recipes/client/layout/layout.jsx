Layout=React.createClass({
  getInitialState(){
    return {
      searchDropdownVisible: false,
      searchValue: ''
    };
  },

  toggleSearchDropdown(){
    this.setState({searchDropdownVisible: !this.state.searchDropdownVisible});
  },

  searchChanged(event){
    this.setState({searchValue: event.target.value});
  },

  renderSearchDropdown(){
    if (!this.state.searchDropdownVisible){
      return null;
    } else {
      return (
        <div className="search-bar dropdown-search-bar">
          <input
            id="search-bar-input"
            placeholder="search"
            value={this.state.searchValue}
            onChange={this.searchChanged}
          />
        </div>
      );
    }
  },

  render() {
    window.scrollTo(0, 0);

    const content = React.createElement(this.props.content, {
      searchValue: this.state.searchValue
    });

    return (
      <div className="layout">
        <header>
          <a href="/"><span className="site-name">Travel Recipes</span></a>

          <div className="search-bar">
            <i className="material-icons search-icon">search</i>
            <i className="material-icons search-button" onClick={this.toggleSearchDropdown}>search</i>
            <input
              id="search-bar-input"
              placeholder="search"
              value={this.state.searchValue}
              onChange={this.searchChanged}
            />
          </div>

          <Hamburger />
        </header>

        {this.renderSearchDropdown()}

        {content}
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

  goToNewRecipePage(){
    this.toggleMenu();
    FlowRouter.go('/recipe/add');
  },

  logout(){
    this.toggleMenu();
    Meteor.logout();
  },

  render(){
    if (!this.data.loggedIn){
      return (
        <LoginButton />
      );
    } else {
      const display = !this.state.menuVisible ? 'none' : 'inline';

      return (
        <div>
          <div id="hamburger" onClick={this.toggleMenu}></div>

          <div className="hamburger-menu" style={{display: display}}>
            <div className="button" onClick={this.goToNewRecipePage}>
              New recipe
            </div>

            <div className="button" onClick={this.logout}>
               Logout
            </div>
          </div>
        </div>
      );
    }
  }
});



LoginButton=React.createClass({
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  },

  componentWillUmnount(){
    Blaze.remove(this.view);
  },

  render(){
    return (<span ref="container"/>);
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
