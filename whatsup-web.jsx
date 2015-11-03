// #################
// Server side code
// #################

// MongoDB collection setup
Messages = new Mongo.Collection("messages");
Conversations = new Mongo.Collection("conversations");
Users = Meteor.users;

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

  newMessage(messageText, conversationId) {
    var message = Messages.insert(
                                    { 
                                    owner: Meteor.userId(), 
                                    ownerName: Meteor.user().username, 
                                    text: messageText, 
                                    createdAt: new Date(), 
                                    conversation: conversationId
                                    }
    );
  },

  newConversation(partnerId, conversationTitle) {
    var participantArray = [partnerId];
    participantArray.push(Meteor.userId());
    Conversations.insert(
                          {
                            owner: Meteor.userId(),
                            ownerName: Meteor.user().username,
                            participants: participantArray,
                            title: conversationTitle
                          }
    );
  },

  addConversationParticipant(newParticipantId, conversationId){
    var conversation = Conversation.findOne(conversationId);
    if (Meteor.userId() === conversation.owner) {
      if(! conversation.participants.include(newParticipantId)){
        var updatedParticipants = conversation.participants;
        updatedParticipants.push(newParticipantId);
        Conversations.update(conversationId, { $set: {participants: updatedParticipants}});
      }
    }
  },

  getConversationMessages(conversationId) {
    var conversation = Conversation.findOne(conversationId);
    if (conversation.participants.includes(Meteor.userId())) {
      var conversationMessages = Messages.find({conversation: conversationId}, {sort: {createdAt: -1}}).fetch();
      return conversationMessages;
    }
  },

  getUserList(){
    return Users.find({}, {sort: {username: -1}}).fetch();
  },

  getUserConversations(){
    var userId = Meteor.userId();
    return Conversations.find( { participants: { $in: [userId] } } ).fetch();
  }

});