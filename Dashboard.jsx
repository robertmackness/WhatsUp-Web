Dashboard = React.createClass({
  

  render() {
    // Render Dashboard components
    return (
      <div className="container container-full">
        <div className="row ">
        </div>
        <div className="row row-panels">
          <PanelNavigation />
          <PanelChat />
        </div>
      </div>
    );
  }
});