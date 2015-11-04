PanelNavigation = React.createClass({

  // Allow this React component to interact with MongoDB via Meteor
  mixins: [ReactMeteorData],

  getMeteorData(){


    var regexString = this.state.searchTerm;
    var regexQuery = new RegExp("^"+regexString);

    if(this.state.searchTerm === ""){
      return {
        users: Meteor.users.find({username: 11959563956})
      };
    }

    return {
        users: Meteor.users.find({username: {$regex: regexQuery, $options: 'i'}}).fetch()
    }

  },

 getInitialState() {
    return { 
      searchTerm: "",

    };
  },

  setSearchTerm(term){
    this.setState({
      searchTerm: term
    });
    this.forceUpdate();
  },

  renderSearchResults(){
    return this.data.users.map(user => {
      return <UsernameTab user={user.username} />
    });
  },

render() {
  return(
    <div className="col-sm-4 panel-navigation panel panel-default">
      
      <div className="panel-headings row">
        <div className="panel-navigation-buttons">
          <AccountsUIWrapper />
        </div>
      </div>

      <div className="panel-body" id="search-bar-container">
        <div className="row">
          <SearchBar setSearch={this.setSearchTerm} />
        </div>
        <div>
          {this.renderSearchResults()}
        </div>
      </div>

    </div>
  );
}

});
