import React from 'react';
import BookDisplay from './bookdisplay.js'
import CreateBook from './createbook.js'
import SearchBar from './searchbar.js'


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
      books: null,

      searchTitle: "",
      searchAuthor: "",

    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.buildURL = this.buildURL.bind(this);
    this.fetchBooks = this.fetchBooks.bind(this);
  }
  buildURL(){
    let url = ""
    if(this.state.searchTitle != null && this.state.searchTitle != ""){

      url+="&title="+this.state.searchTitle
    }
    if(this.state.searchAuthor != null && this.state.searchAuthor != ""){
      url+="&author="+this.state.searchAuthor
    }
    url = url.replace('&','?')
    return url
  }
  fetchBooks(){
    fetch("http://localhost:80/library/books/index.php" + this.buildURL(),{
      method: 'GET',
      mode: 'cors',
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              books: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }
  componentDidUpdate() {
    console.log("boooooooooks:" +this.state.books)
  }
  componentDidMount(){
    this.fetchBooks()

  }

  onSearchHandler(bookTitle, bookAuthor){

    this.setState({searchTitle: bookTitle,
                    searchAuthor: bookAuthor}, function(){
                      this.fetchBooks()
                    })



  }

  renderPage(){
    switch(this.state.mode){
      case this.modeStates.allBooks:
          return (
            <div>
              <SearchBar handler={this.onSearchHandler} />
              <BookDisplay books={this.state.books} />
            </div>
          )
          break;
      case this.modeStates.createShelf:
          break;
      case this.modeStates.createBook:
          return <CreateBook />;
          break;
      case this.modeStates.createAuthor:
          break;
      default:
          return <BookDisplay books={this.state.books} />;
    }


  }
  render() {
    return (
      <div>
      <button
       className="allBooks"
       onClick={() => this.setState({mode: this.modeStates.allBooks})}
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
      {this.renderPage()}

      </div>
    );
  }
}
export default BookStore;
