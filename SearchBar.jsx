SearchBar = React.createClass({

search(event){
  event.preventDefault();

  var searchTerm = "" + ReactDOM.findDOMNode(this.refs.newSearch).value;

  this.props.setSearch(searchTerm);

},

render(){
  return (
      <input className="search-bar img-rounded" 
                                ref="newSearch"  
                                type="text" 
                                placeholder="Search or start new chat"  
                                onChange={this.search} >
      </input>
  );
}

});