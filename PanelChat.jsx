PanelChat = React.createClass({


  // Allow this React component to interact with MongoDB via Meteor
  mixins: [ReactMeteorData],

  getMeteorData(){    
    var conversationId = this.getCurrentConversationId();
    return {
            messageArray: Messages.find({conversation: conversationId}).fetch()
    }
  },

handleInput(newMessage){
  console.log(this.data.messageArray)
},

getCurrentConversationId(){
  return Meteor.user()? Meteor.user().profile.currentConversationId : "";
},

renderMessages(){

},

render() {
  return(
    <div className="col-xs-8 col-md-8 panel-chat panel panel-default">
      <div className="panel-headings">
        <PanelChatHeader />
      </div>
      <div className="panel-body">
        
      </div>
      <div className="panel-chat-input">
        <PanelChatBar onChatSubmit={this.handleInput}></PanelChatBar>
      </div>
    </div>
  );
}

});