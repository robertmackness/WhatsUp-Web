if (Meteor.isClient) {
  
  // Initialize Accounts to only require a username, no email
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY",
  });

  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
}
