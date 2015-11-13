PanelChatHeader = React.createClass({

  // Allow this React component to interact with MongoDB via Meteor
  mixins: [ReactMeteorData],

  getMeteorData(){    
    var conversationId = this.props.conversationId;
    var convoSubscription = Meteor.subscribe('currentConversation', conversationId);
    return {
            conversationIsLoading: ! convoSubscription.ready(),
            conversation: Conversations.findOne(conversationId),
    }
  },

  getParticipantsUsernames(){

    if(! this.data.conversation){
      return <p>Loading...</p>
    } else {
            var participants = Meteor.users.find( {_id: { $in: this.data.conversation.participants } } ).fetch();
            return  participants.map(participant =>{
                        return <PanelChatHeaderUser participant={participant} />
                    });
    }
  },

  editTitle(event){
    event.preventDefault();
    var newTitle = prompt("Please enter a new conversation title");
    Meteor.call('setConversationTitle', this.props.conversationId, newTitle);
    this.forceUpdate();
  },

  render(){
    
    if(this.data.conversationIsLoading){
      return <div />
    } else {

          return(
            <div className="panel-chat-details">
              <strong className="panel-chat-header">
                {this.data.conversation.title}
              </strong>
              <a href="" onClick={this.editTitle}> Edit</a>
              <div className="panel-chat-header-detail">
                <p>{this.getParticipantsUsernames()}</p>
              </div> 
            </div>
          );
    }



  }

});