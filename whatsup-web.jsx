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
 

  Meteor.publish('conversations', function(){
    var userId = this.userId;
    var conversations = Conversations.find({participants: {$in: [userId]}});
    return conversations;
  });

  Meteor.publish('currentConversation', function(conversationId){
    var currentConversation = Conversations.find(conversationId);
    return currentConversation;
  });

  Meteor.publish('messages', function(conversationId){
    var messages = Messages.find({conversation: {$in: [conversationId]}});
    return messages;
  });

  Meteor.publish('usersSearch', function(){
    return Meteor.users.find();
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

// ###############################################
// Shared server/client methods for optimistic UI
// ###############################################

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
  },

  createNewConversation(currentUser, partnerUserId){
    Conversations.insert({owners: [partnerUserId, currentUser], title: "New Conversation", participants:[partnerUserId, currentUser], groupChat: false });
  },

  setConversationTitle(conversationId, newTitle){
    Conversations.update({_id: conversationId}, { $set: {title: newTitle}});
  }

});

