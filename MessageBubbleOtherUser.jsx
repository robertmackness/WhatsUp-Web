MessageBubbleOtherUser = React.createClass({
  

render() {
  return (
    <div className="row message-bubble-other-user-wrapper">
      <p>{this.props.message.text}</p>
      <p>{this.props.message.createdAt}</p>
    </div>
  );
}


});