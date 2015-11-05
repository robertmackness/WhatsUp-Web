PanelChat = React.createClass({

getInitialState(){
  return {
    messages: []
  }
},

handleInput(newMessage){

var newMessageArray = this.state.messages;
newMessageArray.push(newMessage);

  this.setState({
    messages: newMessageArray
  });

},



render() {
  return(
    <div className="col-sm-8 panel-chat panel panel-default">
      <div className="panel-headings">
        <PanelChatHeader />
      </div>
      <div className="panel-body">
        <p>{this.state.messages}</p>
      </div>
      <div className="panel-chat-input">
        <PanelChatBar onChatSubmit={this.handleInput}></PanelChatBar>
      </div>
    </div>
  );
}

});