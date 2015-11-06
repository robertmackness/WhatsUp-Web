MessageBubbleOtherUser = React.createClass({

getDateFormatted(){

 var dateString    = this.props.message.createdAt.toString();
 var subString1    = dateString.substr(0,3);
 var substring2    = dateString.substr(16,5);
 var dateFormatted = subString1 + " " + substring2;
 return dateFormatted;
/**
 0123456789
           0123456789
                     0123456789
 Fri Nov 06 2015 15:04:03 GMT+0000 (GMT)
*/
},

render() {
  return (
    <div className="message-bubble-other-user-wrapper">
      <strong>{this.props.message.ownerName}</strong>
      <p>{this.props.message.text}</p>
      <div className="message-bubble-other-user-dtg"> <p>{this.getDateFormatted()}</p> </div>
      <img src="tailOtherUser.png" alt="" />
    </div>

  );
}


});