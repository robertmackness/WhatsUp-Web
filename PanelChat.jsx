PanelChat = React.createClass({


  // Allow this React component to interact with MongoDB via Meteor
  mixins: [ReactMeteorData],

  getMeteorData(){    
    var conversationId = this.getCurrentConversationId();
    return {
            messageArray: Messages.find({conversation: conversationId}).fetch(),
            conversation: Conversations.findOne(conversationId)
    }
  },

  componentDidUpdate(){
    var panelChat = ReactDOM.findDOMNode(this.refs.panelChatBody);
    panelChat.scrollTop = panelChat.scrollHeight;
  },

handleInput(newMessage){
  Meteor.call("addNewMessage", newMessage);
  
},

getCurrentConversationId(){
  return Meteor.user()? Meteor.user().profile.currentConversationId : "";
},

renderMessages(){

  return this.data.messageArray.map((message) =>{
    if (message.owner === Meteor.userId()){
      return <MessageBubbleCurrentUser message={message} />;
    } else {
      return <MessageBubbleOtherUser message={message} />;
    }
  })

},

render() {

  var currentConversationId = this.getCurrentConversationId();

  return(
    <div className="col-xs-8 col-md-8 panel-chat panel panel-default">
      <div className="panel-headings">
        <PanelChatHeader conversationId={currentConversationId}/>
      </div>
      <div className="panel-body panel-chat-body" ref="panelChatBody">
        {this.renderMessages()}
      </div>
      <div className="panel-chat-input" >
        <PanelChatBar onChatSubmit={this.handleInput} />
      </div>
    </div>
  );
}

});