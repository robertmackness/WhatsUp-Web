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
    <div className="col-sm-8 
                      panelChat img-rounded
                        panel panel-default">
      <div className="panel-heading img-rounded">
        <h1 className="h1">
          Conversations
        </h1>
      </div>
      <div className="panel-body img-rounded ">
        <Conversation messages={this.state.messages} />
      </div>
      <div className="PanelChatInput">
        <PanelChatBar onChatSubmit={this.handleInput.bind(this)}></PanelChatBar>
      </div>
    </div>
  );
}

});