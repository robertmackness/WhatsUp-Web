Dashboard = React.createClass({
  
  render() {
    // Render Dashboard components
    return (
      <div className="container-fluid">
        <div className="jumbotron col-md-12 col-sm-12">
          <PanelJumbotron />
        </div>
        <div className="row">
          <AccountsUIWrapper />
        </div>
        <div className="row">
          <PanelNavigation />
          <PanelChat />
        </div>
      </div>
    );
  }
});