PanelNavigation = React.createClass({

  // Allow this React component to interact with MongoDB via Meteor
  mixins: [ReactMeteorData],

  getMeteorData(){
    var regexString = this.state.searchTerm;
    var regexQuery = new RegExp(regexString);

    if(this.state.searchTerm === ""){
      return {
        users: Meteor.users.find({username: 9999999999999999999999999})
      };
    }

    return {
        users: Meteor.users.find({username: {$regex: regexQuery, $options: 'i'}}).fetch(),
        conversations: Conversations.find({title: {$regex: regexQuery, $options: 'i'}}).fetch(),
    }

  },

 getInitialState() {
    return { 
      searchTerm: "",
    };
  },

componentDidUpdate(){
  Meteor.call("setCurrentConversationId", conversationId._id)
},

  setSearchTerm(term){
    this.setState({
      searchTerm: term
    });
    this.forceUpdate();
  },

  renderSearchResults(){
    return this.data.users.map(user => {
      return <UsernameTab user={user} 
                    setCurrentConversation={this.setCurrentPrivateConversationId} />
    });
  },

  setCurrentPrivateConversationId(partnerUserId){
    var partner = partnerUserId;
    var currentUser = Meteor.userId();
    var conversationId = Conversations.find( { $and: [
                                                      {participants: { $in: [partner]}}, 
                                                      {participants: { $in: [currentUser]}}
                                                      ],
                                              groupChat: false
                                              },
                                              {limit: 1}
                                            );

    if(conversationId.count() <1 ){
     // Add new conversation generation here
     Meteor.call("createNewConversation", currentUser, partnerUserId);
    }

    if(conversationId.count() == 1){
     conversationId = conversationId.fetch()[0];

     Meteor.call("setCurrentConversationId", conversationId._id)
    }

  },

render() {
  return(
    <div className="col-xs-4 col-md-4 panel-navigation panel panel-default">
      
      <div className="panel-headings row">
        <div className="panel-navigation-buttons">
          <AccountsUIWrapper />
        </div>
      </div>

      <div className="panel-body" id="search-bar-container">
        <div className="row">
          <SearchBar setSearch={this.setSearchTerm} />
        </div>
        <div>
          {this.renderSearchResults()}
        </div>
      </div>

    </div>
  );
}

});
