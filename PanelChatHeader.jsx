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

  render(){
    
    if(! this.data.conversation){
      console.log("currently Null");
      return <div />
    } else {

          return(
            <div className="panel-chat-details">
              <strong className="panel-chat-header">
                {this.data.conversation.title}
              </strong>
              <div className="panel-chat-header-detail">
                <p>{this.getParticipantsUsernames()}</p>
              </div> 
            </div>
          );
    }



  }

});