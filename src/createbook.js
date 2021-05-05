import React from 'react';

class CreateBook extends React.Component {
  render() {
    const states = this.props.states
    const authors = this.props.authors
    const shelfs = this.props.shelfs

    if(
      states == null || states == undefined ||
      authors == null || authors == undefined ||
      shelfs == null || shelfs == undefined
    ){
      return (<div>error</div>)
    }
      const stateOptions = states.map((state) => <option value={state.name}>{state.name}</option>);
      const authorOptions = authors.map((author) => <option value={author.name}>{author.name}</option>);
      const shelfOptions = shelfs.map((shelf) => <option value={shelf.name}>{shelf.name}</option>);


    //books.map((book) => <BookRow id={book.id} title={book.title} name={book.name} shelfdescr={book.shelfdescr} state={book.state} />);
    return (
        <form className="hi" noValidate autoComplete="off">
          <input type="text" id="fname" name="bookName" placeholder="bookName"/>
          <select name="authors" id="authors">
            {authorOptions}
          </select>
          <select name="shelfs" id="shelfs">
            <option selected value="none">none</option>
            {shelfOptions}
          </select>
          <select name="states" id="states">
            {stateOptions}
          </select>
          <input type="submit" id="fname" name="send" />
        </form>
      );
  }
}
export default CreateBook;
