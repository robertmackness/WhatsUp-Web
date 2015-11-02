AccountsUIWrapper = React.createClass({
  
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    // Currently no React support
    this.view = Blaze.render(Template.loginButtons,
      React.findDOMNode(this.refs.accountsUIcontainer));
  },

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },

  render() {
    // Just render a placeholder container that will be filled in
    return (
      <div ref="accountsUIcontainer"
            className="accountsUIWrapper 
              col-md-5 col-sm-5
                img-rounded">
        { Meteor.user() ?
              (<span> Welcome, </span>
              ) : <span> Sign in or Sign up to view your conversations! </span>
        }
      </div>

    );
  }
});