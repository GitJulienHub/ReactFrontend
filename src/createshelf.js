import React from 'react';

class CreateShelf extends React.Component {

  handleSubmit(event){
    event.preventDefault();

    fetch("http://localhost:80/library/shelfs/create/index.php",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*',
        "Access-Control-Allow": "*",
        "Access-Control-Allow-Headers": "*",
        'Access-Control-Allow-Origin': '*',
     },
      body: JSON.stringify({
          shelfdescr: event.target.shelfdescr.value,
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
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="shelfdescr" name="shelfdescr" placeholder="shelfdescr"/>
          <input type="submit" />
        </form>
      );
  }
}
export default CreateShelf;
