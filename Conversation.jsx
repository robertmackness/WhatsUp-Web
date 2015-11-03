Conversation = React.createClass({

render: function(){

   var conversation = this.props.messages.map(function(msg) {
      return <p>{msg}</p>;
        });
   return <div>{conversation}</div>;
  },

});