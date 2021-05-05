import React from 'react';



class StateOptionSelect extends React.Component{
  constructor(){
    super()
    this.state={
      bookid: null
    }
  this.handleStateChanged = this.handleStateChanged.bind(this);
  }

    handleStateChanged(event){
      fetch("http://localhost:80/library/books/update/index.php?"+
      "stateid="+event.target.value +
      "&bookid="+this.state.bookid
      ,{
        method: 'GET',
      })
          .then(
            (result) => {
              console.log(result)
            },
            (error) => {
              console.log(error)
            }
          )
    }
    render(){
      this.state.bookid = this.props.bookid
      const selectedStateId = this.props.selectedStateId
      const states = this.props.states
      const stateOptions = states.map(
        function(state) {
          if(state.id === selectedStateId){
            return <option  selected value={state.id}>{state.state}</option>
          }
          return <option  value={state.id}>{state.state}</option>
        }
        );


      return(
        <select onChange={this.handleStateChanged} name="states" id="states">
          {stateOptions}
        </select>
      )
    }

}
class ShelfOptionSelect extends React.Component{
    constructor(){
      super()
      this.state={
        bookid: null
      }
    this.handleShelfChanged = this.handleShelfChanged.bind(this);
    }
    handleShelfChanged(event){
      fetch("http://localhost:80/library/books/update/index.php?"+
      "shelfid="+event.target.value +
      "&bookid="+this.state.bookid
      ,{
        method: 'GET',
      })
          .then(
            (result) => {
              console.log(result)
            },
            (error) => {
              console.log(error)
            }
          )
    }
    render(){
      this.state.bookid = this.props.bookid
      const selectedShelfId = this.props.selectedShelfId
      const shelfs = this.props.shelfs
      const shelfOptions = shelfs.map(
        function(shelf) {
          if(shelf.id != selectedShelfId || selectedShelfId == null){
            return <option  value={shelf.id}>{shelf.shelfdescr}</option>
          }
          return <option  selected value={shelf.id}>{shelf.shelfdescr}</option>

        }
        );

      const nullOption = (function(){
          if(selectedShelfId === "null"){
            return <option selected value="null">none</option>
          }
            return <option value="null">none</option>
        })();



      return(
        <select onChange={this.handleShelfChanged} name="shelfs" id="shelfs">
          {nullOption}
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
          <td><ShelfOptionSelect bookid={this.props.id} selectedShelfId={this.props.selectedShelfId} shelfs={this.props.shelfs}/></td>
          <td><StateOptionSelect bookid={this.props.id} selectedStateId={this.props.selectedStateId} states={this.props.states}/></td>
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

    return books.map((book) => <BookRow id={book.id} title={book.title} name={book.name} selectedShelfId={book.shelfid} shelfs={shelfs} selectedStateId={book.stateid} states={states} />);
  }
  render() {
    return (
      <table id="books">
      <thead>
          <tr>
              <th>Titel</th>
              <th>Author</th>
              <th>Regal</th>
              <th>Status</th>
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
