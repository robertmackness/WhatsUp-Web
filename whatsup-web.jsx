// #################
// Server side code
// #################

// MongoDB collection setup
Messages = new Mongo.Collection("messages");
Conversations = new Mongo.Collection("conversations");

// #################
// Client side code
// #################
if (Meteor.isClient) {
  
  // Initialize Accounts to only require a username, no email
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY",
  });

  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
}

// ############################
// Shared server/client methods
// ############################

// Adding Meteor.methods ensure that clients cannot call 
// data store methods directly from the browser. These methods
// need to be used to access the data store.
Meteor.methods({

)};