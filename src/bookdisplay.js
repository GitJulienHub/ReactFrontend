import React from 'react';




class ShelfOptionSelect extends React.Component{
    render(){

      const selectedShelfId = this.props.selectedShelfId
      const shelfs = this.props.shelfs
      const shelfOptions = shelfs.map(
        function(shelf) {
          if(shelf.id === selectedShelfId){
            return <option selected value={shelf.id}>{shelf.shelfdescr}</option>
          }
          return <option value={shelf.id}>{shelf.shelfdescr}</option>
        }
        );


      return(
        <select name="shelfs" id="shelfs">
          {shelfOptions}
        </select>
      )
    }

}
class BookRow extends React.Component {

  render() {
    return (
      <tr>
          <td>{this.props.title}</td>
          <td>{this.props.name}</td>
          <td><ShelfOptionSelect selectedShelfId={this.props.selectedShelfId} shelfs={this.props.shelfs}/></td>
          <td>{this.props.state}</td>
      </tr>
    );
  }
}
class BookDisplay extends React.Component {

  renderRow(books, shelfs, states) {
    if(
      books == null || books == undefined ||
      shelfs == null || shelfs == undefined ||
      states == null || states == undefined
    ){
      return
    }

    return books.map((book) => <BookRow id={book.id} title={book.title} name={book.name} selectedShelfId={book.shelfid} state={book.state} shelfs={shelfs} states={states} />);
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
        {this.renderRow(this.props.books, this.props.shelfs, this.props.states)}

      </tbody>
  </table>
    );
  }
}
export default BookDisplay;
