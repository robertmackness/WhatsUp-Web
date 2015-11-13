ConversationTab = React.createClass({

clicked(){
  this.props.setCurrentConversation(this.props.convo._id);
},

mouseEnter(){
  ReactDOM.findDOMNode(this.refs.convoTab).style.backgroundColor = "#eeeeee";
},

mouseLeave(){
  ReactDOM.findDOMNode(this.refs.convoTab).style.backgroundColor = "#ffffff";
},

backgroundStyle(){
  var imageUrl = "url(conversationBubble" + (Math.floor(Math.random() * 9) + 1) + ".png)";
  var backgroundStyles = {
    backgroundImage: imageUrl,
    backgroundColor: "#ffffff !important"
  };
  return backgroundStyles;
},

backgroundStyleCurrent(){
  var imageUrl = "url(conversationBubble" + (Math.floor(Math.random() * 9) + 1) + ".png)";
  var backgroundStyles = {
    backgroundImage: imageUrl,
    backgroundColor: "#eeeeee !important"
  };
  return backgroundStyles;
},

render() {
  
  if(this.props.convo._id === this.props.currentConversationId){
      return (
        <div className="conversation-tab-wrapper" ref="convoTab" style={this.backgroundStyleCurrent()} 
                  onClick={this.clicked}>
          <div className="conversation-tab-title">
            <strong>{this.props.convo.title}</strong>
          </div>
        </div>
      );
  } else {
      return (
        <div className="conversation-tab-wrapper" ref="convoTab" style={this.backgroundStyle()} 
                  onClick={this.clicked} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className="conversation-tab-title">
            <strong>{this.props.convo.title}</strong>
          </div>
        </div>
      );
  }



}

});