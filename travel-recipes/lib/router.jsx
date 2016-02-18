FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {
      content: <MainPage />
    });
  }
});

MainPage=React.createClass({
  render() {
    return null;
  }
})