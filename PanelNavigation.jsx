PanelNavigation = React.createClass({

 getInitialState() {
    return { 
      navOption : 1
    };
  },

render() {
  return(
    <div className="col-sm-4 
                      panelNavigation img-rounded
                        panel panel-default">
      <div className="panel-heading img-rounded">
        <h1 className="h1">
          Navigation
        </h1>
      </div>
      <div className="panel-body img-rounded">
        <nav class="navbar navbar-default panelNavigationButtons">
          <button type="button" className="btn btn-warning navbar-btn" 
                                onClick={this.setNavOption1}>
            Friends
          </button>
          <button type="button" className="btn btn-warning navbar-btn" 
                                onClick={this.setNavOption2}>
            Conversations
          </button>
        </nav>
        <p>Currently rendering #{this.state.navOption} of 3 possible options</p>
      </div>
    </div>
  );
},

setNavOption1(){
  this.setState({
      navOption : 1
    });
},
setNavOption2(){
  this.setState({
      navOption : 2
    });
}

});

