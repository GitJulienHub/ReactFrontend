import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      author: props.author,
    };
    this.handleSearchChanged = this.handleSearchChanged.bind(this);
    this.handleTitleSearchChange = this.handleTitleSearchChange.bind(this);
    this.handleAuthorSearchChange = this.handleAuthorSearchChange.bind(this);
    this.handleResetSearch = this.handleResetSearch.bind(this);
  }
  handleSearchChanged(){
    this.props.handler(this.state.name, this.state.author)
  }
  handleResetSearch(event){
    this.props.resetSearchHandler()
  }
  handleTitleSearchChange(e){
    //this.setState({name: e.target.value});
    this.state.name = e.target.value
  }
  handleAuthorSearchChange(e){
    this.state.author = e.target.value
    //this.setState({author: e.target.value});

  }
  handleSubmit(e){
    e.preventDefault();
  }

  render() {

    return (
        <form onSubmit={this.handleSubmit} class="searchbar">
          <input type="text"  id="name" value={this.state.name} onChange={this.handleTitleSearchChange} name="name" placeholder="Buch Titel"/>

          <input type="text"  id="author"value={this.state.author} onChange={this.handleAuthorSearchChange} name="author" placeholder="Buch Author"/>


            <button type="submit" onClick = {this.handleSearchChanged}>
            Suchen
             </button>
             <button name="reset" type="reset" onClick = {this.handleResetSearch}>
             Reset
              </button>
          </form>
      );
  }
}
export default SearchBar;
