App = React.createClass({

// Allow the React component to interact with MongoDB via Meteor
mixins: [ReactMeteorData],

getMeteorData(){

  return {
    users: Meteor.users.find({}).fetch(),
    conversations: Conversations.find().fetch(),
    messages: Messages.find().fetch()

  }

},

  render() {
    return(
        <div className="container">
          <Dashboard  users={this.data.users} 
                      conversations={this.data.conversations} 
                      messages={this.data.messages} >
          </Dashboard>
        </div>
    );
  }

});