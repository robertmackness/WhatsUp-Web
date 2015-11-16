UsernameTab = React.createClass({


clicked(){
  this.props.setCurrentConversation(this.props.user._id);
},

mouseEnter(){
  ReactDOM.findDOMNode(this.refs.usernameTab).style.backgroundColor = "#eeeeee";
},

mouseLeave(){
  ReactDOM.findDOMNode(this.refs.usernameTab).style.backgroundColor = "#ffffff";
},

render() {
    
  if(this.props.user._id === Meteor.userId()){
    return <div />;
  }

  var imageUrl = "url(conversationBubble1.png)";
  var backgroundImageStyle = {
    backgroundImage: imageUrl
  };

  return (
    <div className="username-tab-wrapper" ref="usernameTab" style={backgroundImageStyle} 
                  onClick={this.clicked} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
      
      <div className="username-tab-username">
        <strong>{this.props.user.username}</strong>
      </div>

    </div>
    );
}

});