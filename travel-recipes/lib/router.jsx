FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {
      content: <MainPage />
    });
  }
});

