Dashboard = React.createClass({
  

  /**
  checkAuthenticated(){

    if (Meteor.user()){
      this.renderDashboard()
    } else { 
      this.renderAuthentication() ;
    }

  },

  renderDashboard(){
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
  },

  renderAuthentication(){
    return (
        <div className="container container-full">
            <div className="row">
              <AccountsUIWrapper />
            </div>
        </div>
      );
  },
*/
  render() {
    //return <div>{this.checkAuthenticated()}</div>;
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