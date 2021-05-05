import React from 'react';

class CreateAuthor extends React.Component {

  handleSubmit(event){
    event.preventDefault();

    fetch("http://localhost:80/library/authors/create/index.php",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*',
        "Access-Control-Allow": "*",
        "Access-Control-Allow-Headers": "*",
        'Access-Control-Allow-Origin': '*',
     },
      body: JSON.stringify({
          name: event.target.authorName.value,
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
          <input type="text" id="authorName" name="authorName" placeholder="authorName"/>
          <input type="submit" />
        </form>
      );
  }
}
export default CreateAuthor;
