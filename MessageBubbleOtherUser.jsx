MessageBubbleOtherUser = React.createClass({

render() {
  return (
    <div className="message-bubble-other-user-wrapper">
      <strong>{this.props.message.ownerName}</strong>
      <p>{this.props.message.text}</p>
      <div className="message-bubble-other-user-dtg"> <p>{this.props.message.createdAt}</p> </div>
      <img src="tailOtherUser.png" alt="" />
    </div>

  );
}


});