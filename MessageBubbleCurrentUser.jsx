MessageBubbleCurrentUser = React.createClass({
  

render() {
  return (
    <div className="row message-bubble-current-user-wrapper">
      <p>{this.props.message.text}</p>
      <p>{this.props.message.createdAt}</p>
    </div>
  );
}


});