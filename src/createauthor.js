import React from 'react';

class CreateAuthor extends React.Component {

  handleSubmit(event){
    event.preventDefault();

    fetch("http://localhost/library/authors/create/index.php?name="+event.target.authorName.value,{
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
  render() {
    return (
        <form onSubmit={this.handleSubmit} class="input">
          <input type="text" id="authorName" name="authorName" placeholder="authorName"/>
          <input type="submit" />
        </form>
      );
  }
}
export default CreateAuthor;
