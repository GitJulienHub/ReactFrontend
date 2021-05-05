import React from 'react';



class BookRow extends React.Component {
  render() {
    return (
      <tr>
          <td>{this.props.title}</td>
          <td>{this.props.name}</td>
          <td>{this.props.shelfdescr}</td>
          <td>{this.props.state}</td>
      </tr>
    );
  }
}
class BookDisplay extends React.Component {

  renderRow(books) {
    if(books == null || books == undefined){
      return
    }
    return books.map((book) => <BookRow id={book.id} title={book.title} name={book.name} shelfdescr={book.shelfdescr} state={book.state} />);
  }
  render() {
    return (
      <table class="styled-table">
      <thead>
          <tr>
              <th>Name</th>
              <th>Points</th>
          </tr>
      </thead>
      <tbody>
        {this.renderRow(this.props.books)}

      </tbody>
  </table>
    );
  }
}
export default BookDisplay;
