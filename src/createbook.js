import React from 'react';

class CreateBook extends React.Component {

  handleSubmit(event){
    event.preventDefault();
    //console.log(event.target.authors.value)

    fetch("http://localhost:80/library/books/create/index.php",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*',
        "Access-Control-Allow": "*",
        "Access-Control-Allow-Headers": "*",
        'Access-Control-Allow-Origin': '*',
     },
      body: JSON.stringify({
          title: event.target.bookName.value,
          state: event.target.states.value,
          shelf: event.target.shelfs.value,
          author: event.target.authors.value
         })
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
          },
          (error) => {
            console.log(error)
          }
        )
  }
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
      const stateOptions = states.map((state) => <option value={state.id}>{state.state}</option>);
      const authorOptions = authors.map((author) => <option value={author.id}>{author.name}</option>);
      const shelfOptions = shelfs.map((shelf) => <option value={shelf.id}>{shelf.shelfdescr}</option>);

    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="bookName" name="bookName" placeholder="bookName"/>
          <select name="authors" id="authors">
            {authorOptions}
          </select>
          <select name="shelfs" id="shelfs">
            <option selected value="null">none</option>
            {shelfOptions}
          </select>
          <select name="states" id="states">
            {stateOptions}
          </select>
          <input type="submit" />
        </form>
      );
  }
}
export default CreateBook;
