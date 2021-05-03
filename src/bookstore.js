import React from 'react';
import BookDisplay from './bookdisplay.js'


class BookStore extends React.Component {

  constructor(props){
    super(props);
    this.modeStates = {
      allBooks: 1,
      createShelf: 2,
      createBook: 3,
    }
    this.state = {
      mode: this.modeStates.allBooks,
      books: null,
    };
  }
  renderPage(){


    switch(this.state.mode){
      case this.modeStates.allBooks:
          return <BookDisplay books={this.state.books} />;
          break;
      case this.modeStates.createShelf:
          break;
      case this.modeStates.createBook:
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

      </button>

      <button
       className="createShelf"
       onClick={() => this.setState({mode: this.modeStates.createShelf})}
       >
       </button>
       <button
        className="createBook"
        onClick={() => this.setState({mode: this.modeStates.createBook})}
        >
        </button>
      {this.renderPage()}

      </div>
    );
  }
}
export default BookStore;
