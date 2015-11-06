MessageBubbleCurrentUser = React.createClass({


render() {
  return (
    <div className="message-bubble-current-user-wrapper">
      <p>{this.props.message.text}</p>
      <div className="message-bubble-current-user-dtg"> <p>{this.props.message.createdAt}</p> </div>
      <img src="tailCurrentUser.png" alt="" />
    </div>
  );
}


});