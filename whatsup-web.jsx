// #################
// Server side code
// #################
if(Meteor.isServer) {

  Accounts.onCreateUser(function(options, user) {
    user.profile = {
      currentConversationId : 0
    }
    return user;
  });
  
}

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
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

// ############################
// Shared server/client methods
// ############################

// Adding Meteor.methods ensure that clients cannot call 
// data store methods directly from the browser. These methods
// need to be used to access the data store.
Meteor.methods({

  setCurrentConversationId(conversationId){
    var currentUser = Meteor.userId();
    Meteor.users.update({_id: currentUser} , {$set: {profile:{currentConversationId: conversationId}} });
  },

  getCurrentConversationParticipants(participantArray){
    var userObjectArray =  Meteor.users.find( {_id: { $in: { participantArray } } } ).fetch();

  },

  addNewMessage(newMessage){
    var currentUser = Meteor.userId();
    var currentUsername = Meteor.user().username;
    var currentConversationId = Meteor.user().profile.currentConversationId;
    var currentTime = new Date();
    Messages.insert({owner: currentUser, ownerName: currentUsername, text: newMessage, conversation: currentConversationId, createdAt: currentTime});
  }

});

