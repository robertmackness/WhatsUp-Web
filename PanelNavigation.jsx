PanelNavigation = React.createClass({

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
        { this.getCurrentPanel() }
      </div>
    </div>
  );
},

getCurrentPanel() {

  if (!Meteor.user()){
    return <p>Please sign-in or sign-up</p>
  };

  return <p>Logged in</p>;

}

});