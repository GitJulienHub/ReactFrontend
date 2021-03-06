import React from 'react';
import BookDisplay from './bookdisplay.js'
import CreateBook from './createbook.js'
import SearchBar from './searchbar.js'
import CreateAuthor from './createauthor.js'
import CreateShelf from './createshelf.js'

class BookStore extends React.Component {

  constructor(props){
    super(props);
    this.modeStates = {
      allBooks: 1,
      createShelf: 2,
      createBook: 3,
      createAuthor: 4,
    }
    this.state = {
      mode: this.modeStates.allBooks,
      lastMode: this.modeStates.allBooks,
      books: null,
      authors: null,
      shelfs: null,
      states: null,

      searchTitle: "",
      searchAuthor: "",

    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.buildURL = this.buildURL.bind(this);
    this.fetchBooks = this.fetchBooks.bind(this);
    this.fetchStates = this.fetchStates.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.refreshData = this.refreshData.bind(this);
  }
  resetSearch(){
    this.setState({
      searchTitle: "",
      searchAuthor: ""
    }, function(){
       this.fetchBooks()
     });
  }

  buildURL(){
    let url = ""
    if(this.state.searchTitle != null && this.state.searchTitle != ""){

      url+="&title="+this.state.searchTitle
    }
    if(this.state.searchAuthor != null && this.state.searchAuthor != ""){
      url+="&name="+this.state.searchAuthor
    }
    url = url.replace('&','?')
    return url
  }
  fetchAuthors(){
    fetch("http://localhost:80/library/authors/index.php",{
      method: 'GET',
      mode: 'cors',
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log("getting the authors:"+ result);
            this.setState({
              authors: result
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
  }
  fetchShelfs(){
    fetch("http://localhost:80/library/shelfs/index.php",{
      method: 'GET',
      mode: 'cors',
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              shelfs: result
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
  }
  fetchStates(){
    fetch("http://localhost:80/library/states/index.php",{
      method: 'GET',
      mode: 'cors',
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              states: result
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
  }
  fetchBooks(){
    console.log("whyyy")
    fetch("http://localhost:80/library/books/index.php" + this.buildURL(),{
      method: 'GET',
      mode: 'cors',
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log("postbooks?: "+result);
            this.setState({
              books: result
            });
          },
          (error) => {
            console.log(error)
            this.setState({
              error
            });
          }
        )
  }
  componentDidUpdate() {
    console.log("boooooooooks:" +this.state.books)
    console.log("states:" +this.state.states)
  }
  componentDidMount(){
    this.refreshData()
  }
  refreshData(){
    this.fetchBooks()
    this.fetchStates()
    this.fetchAuthors()
    this.fetchShelfs()
  }

  onSearchHandler(bookTitle, bookAuthor){

    this.setState({searchTitle: bookTitle,
                   searchAuthor: bookAuthor}, function(){
                      this.fetchBooks()
                    })

  }

  renderPage(){
    if(this.state.mode != this.state.lastMode){
      this.refreshData()
      this.state.lastMode = this.state.mode
    }
    switch(this.state.mode){
      case this.modeStates.allBooks:
          return (
            <div>
              <SearchBar handler={this.onSearchHandler} resetSearchHandler={this.resetSearch} />
              <BookDisplay books={this.state.books} shelfs={this.state.shelfs} states={this.state.states} />
            </div>
          )
          break;
      case this.modeStates.createShelf:
          return <CreateShelf />
          break;
      case this.modeStates.createBook:
          return <CreateBook authors={this.state.authors} shelfs={this.state.shelfs} states={this.state.states}/>;
          break;
      case this.modeStates.createAuthor:
          return <CreateAuthor />
          break;
      default:
          return <BookDisplay books={this.state.books} />;
    }


  }
  render() {
    return (
      <div class="content">
      <div class="topnav">
      <button
       className="allBooks"
       onClick={() => this.setState({
         mode: this.modeStates.allBooks,
       })}
       >
       Alle Buecher
      </button>

      <button
       className="createShelf"
       onClick={() => this.setState({mode: this.modeStates.createShelf})}
       >
       Buecherregal erstellen
       </button>

       <button
        className="createBook"
        onClick={() => this.setState({mode: this.modeStates.createBook})}
        >
        Buch erstellen
        </button>
        <button
         className="createAuthor"
         onClick={() => this.setState({mode: this.modeStates.createAuthor})}
         >
         Author erstellen
         </button>
         </div>
      {this.renderPage()}

      </div>
    );
  }
}
export default BookStore;
