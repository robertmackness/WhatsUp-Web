Dashboard = React.createClass({
  
  render() {
    // Render Dashboard components
    return (
      <div className="container">
        <div className="row">
          <PanelNavigation />
          <PanelChat />
        </div>
      </div>
    );
  }
});