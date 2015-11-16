PanelChatBar = React.createClass ({

handleSubmit(event){

  event.preventDefault();

  var message = ReactDOM.findDOMNode(this.refs.newMessage).value;
  if(message != ""){
    this.props.onChatSubmit(message);
    ReactDOM.findDOMNode(this.refs.newMessage).value = "";
  }

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