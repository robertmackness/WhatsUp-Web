Dashboard = React.createClass({
  

  renderUsers() {
    return this.props.users.map((user) => {
          return <UsernameTab user={user.username} />;
        });
   },

  render() {
    // Render Dashboard components
    return (
      <div className="container container-full">
        <div className="row ">
          {this.renderUsers()}
        </div>
        <div className="row row-panels">
          <PanelNavigation />
          <PanelChat />
        </div>
      </div>
    );
  }
});