Dashboard = React.createClass({
  
  render() {
    // Render Dashboard components
    return (
      <div className="container container-full">
        <div className="jumbotron col-sm-12">
          <PanelJumbotron />
        </div>
        <div className="row ">
          <AccountsUIWrapper />
        </div>
        <div className="row row-panels">
          <PanelNavigation />
          <PanelChat />
        </div>
      </div>
    );
  }
});