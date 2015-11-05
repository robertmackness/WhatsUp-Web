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

  return (
    <div className="username-tab" ref="usernameTab" 
                  onClick={this.clicked} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
      <p>{this.props.user.username}</p>
    </div>
    );
}

});