Layout = React.createClass({
  render() {
        /*{{#if rwindow.innerWidth 'lte' 700}}
      <div id="hamburger"></div>
    {{else}}
      {{#if currentUser}}
        <a class="button headerButton" href="/recipes/add" role="button">
           New recipe
        </a>
      {{/if}}

    {{/if}}*/
    return (<div className="layout">
      <header>
        <a href="/"><span className="site-name">Travel Recipes</span></a>

        <LoginButtons />
      </header>

      { this.props.content }

    </div>);
  }
})


LoginButtons = React.createClass({
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  },

  componentWillUmnount(){
    Blaze.remove(this.view);
  },

  render(){
    return <span ref="container" />;
  }

});