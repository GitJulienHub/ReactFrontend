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
  }
  handleSearchChanged(){
    this.props.handler(this.state.name, this.state.author)
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
        <form onSubmit={this.handleSubmit}>
          <input type="text"  id="name" value={this.state.name} onChange={this.handleTitleSearchChange} name="name" placeholder="Name"/>

          <input type="text"  id="author"value={this.state.author} onChange={this.handleAuthorSearchChange} name="bookAuthor" placeholder="Book Author"/>


            <button type="submit" onClick = {this.handleSearchChanged}>
            Suchen
             </button>
          </form>
      );
  }
}
export default SearchBar;
