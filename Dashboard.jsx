Dashboard = React.createClass({

  render() {

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