PanelNavigation = React.createClass({

 getInitialState() {
    return { 
      searchTerm: "",

    };
  },

  setSearchTerm(term){
    this.setState({
      searchTerm: term
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

      <div className="panel-body img-rounded">
        <div className="row">
          <SearchBar setSearch={this.setSearchTerm} />
        </div>
        <div>
          {this.state.searchTerm}
        </div>
      </div>

    </div>
  );
}

});

