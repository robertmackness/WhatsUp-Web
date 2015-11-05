UsernameTab = React.createClass({


clicked(){
  return window.confirm("Clicked");
},

mouseEnter(){
  ReactDOM.findDOMNode(this.refs.usernameTab).style.backgroundColor = "#eeeeee";
},

mouseLeave(){
  ReactDOM.findDOMNode(this.refs.usernameTab).style.backgroundColor = "#ffffff";
},

render() {
  return (
    <div className="username-tab" ref="usernameTab" 
                  onClick={this.clicked} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
      <p>{this.props.user}</p>
    </div>
    );
}

});