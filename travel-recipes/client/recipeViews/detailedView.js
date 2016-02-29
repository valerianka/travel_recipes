Template.recipe.helpers({
  isUserAndCreator() {
    return Meteor.user() ? Meteor.user().username === this.userName : false;
  }
});
