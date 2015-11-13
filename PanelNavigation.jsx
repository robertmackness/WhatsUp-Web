PanelNavigation = React.createClass({

  // Allow this React component to interact with MongoDB via Meteor
  mixins: [ReactMeteorData],

  getMeteorData(){
    var regexString = this.state.searchTerm;
    var regexQuery = new RegExp(regexString);
    var convoSubscription = Meteor.subscribe('conversations');
    var usersSubscription = Meteor.subscribe('usersSearch')

    if(this.state.searchTerm === ""){
      return {
        currentConversations: Conversations.find().fetch()
      };
    } else {
        return {
          users: Meteor.users.find({username: {$regex: regexQuery, $options: 'i'}}).fetch(),
          conversations: Conversations.find({title: {$regex: regexQuery, $options: 'i'}}).fetch(),
        };
    }
  },

 getInitialState() {
    return { 
      searchTerm: "",
    };
  },

  setSearchTermEmpty(){
    this.setState({
        searchTerm: ""
      });
    ReactDOM.findDOMNode(this.refs.searchBar).value = "";
  },

  setSearchTerm(term){
    this.setState({
      searchTerm: term
    });
  },

  renderCurrentConversations(){
    return this.data.currentConversations.map(convo => {
        return <ConversationTab convo={convo} key={convo._id}
                      setCurrentConversation={this.setCurrentConversationId} 
                          currentConversationId={Meteor.user().profile.currentConversationId} />                
      });
  },

  renderUserSearch(){
    return this.data.users.map(user => {
        return <UsernameTab user={user} key={user._id}
                      setCurrentConversation={this.setCurrentPrivateConversationId} />
      });
  },

  renderConversationSearch(){
    return this.data.conversations.map(convo => {
        return <ConversationTab convo={convo} key={convo._id}
                      setCurrentConversation={this.setCurrentConversationId} 
                          currentConversationId={Meteor.user().profile.currentConversationId} />                
      });
  },

  renderNavPane(){

    if(this.state.searchTerm == ""){
      return this.renderCurrentConversations();
    } else {
      return (<div> {this.renderUserSearch()}
                    {this.renderConversationSearch()}
              </div>
        );
    }
  },

  // Used as a prop for conversationtabs
  setCurrentConversationId(conversationId){
    Meteor.call("setCurrentConversationId", conversationId);
    this.setSearchTermEmpty();
  },

  // Used as a prop for conversationtabs
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
     // New conversation generation here
     Meteor.call("createNewConversation", currentUser, partnerUserId);
     this.setSearchTermEmpty();
    }

    if(conversationId.count() == 1){
     conversationId = conversationId.fetch()[0];

     Meteor.call("setCurrentConversationId", conversationId._id);
     this.setSearchTermEmpty();
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
                  <SearchBar setSearch={this.setSearchTerm} ref="searchBar" />
                </div>
                <div>
                  {this.renderNavPane()}
                </div>
              </div>

            </div>
        );
  
}

});
