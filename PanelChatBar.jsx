PanelChatBar = React.createClass ({

handleSubmit(event){
  event.preventDefault();

  var newMessage = "" + Meteor.user().username + ": " + React.findDOMNode(this.refs.newMessage).value;
  this.props.onChatSubmit(newMessage);
  
  React.findDOMNode(this.refs.newMessage).value = "";

},

render(){
 return (
  <form onSubmit={this.handleSubmit}>
    <input className="new-message img-rounded" 
            ref="newMessage"  
              type="text" 
              placeholder="Type to enter a message"  >
    </input>
  </form>
  );
}

});