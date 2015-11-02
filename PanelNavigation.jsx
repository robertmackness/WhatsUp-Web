PanelNavigation = React.createClass({

 getInitialState() {
    return { 
      navOption : 1
    };
  },

render() {
  return(
    <div className="col-md-4 col-sm-4 
                      panelNavigation img-rounded
                        panel panel-default">
      <div className="panel-heading img-rounded">
        <h1 className="h1">
          Navigation
        </h1>
      </div>
      <div className="panel-body img-rounded">
        <nav class="navbar navbar-default panelNavigationButtons">
          <button type="button" className="btn btn-primary navbar-btn" 
                                onClick={this.setNavOption1}>
            Friends
          </button>
          <button type="button" className="btn btn-warning navbar-btn" 
                                onClick={this.setNavOption2}>
            Conversations
          </button>
          <button type="button" className="btn btn-success navbar-btn"  
                                onClick={this.setNavOption3}>
            Global Chat
          </button>
        </nav>
        <p>This will render #{this.state.navOption} of 3 possible options dependant on nav button pressed above</p>
      </div>
    </div>
  );
},

setNavOption1(){
  this.replaceState({
      navOption : 1
    });
},
setNavOption2(){
  this.replaceState({
      navOption : 2
    });
},
setNavOption3(){
  this.replaceState({
      navOption : 3
    });
}

});

