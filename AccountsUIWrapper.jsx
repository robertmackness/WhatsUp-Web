AccountsUIWrapper = React.createClass({
  
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    // Currently no React support
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.accountsContainer));
  },

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },

  render() {
    // Just render a placeholder container that will be filled in
    return (
      <div ref="accountsContainer"
            className="accounts-ui-wrapper">
      </div>
    );
  }
});