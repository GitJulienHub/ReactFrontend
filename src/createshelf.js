import React from 'react';

class CreateShelf extends React.Component {

  handleSubmit(event){
    event.preventDefault();


        fetch("http://localhost/library/shelfs/create/index.php?shelfdescr="+event.target.shelfdescr.value,{
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
/*
    fetch("http://localhost:80/library/shelfs/create/index.php",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
*/
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit} class="input">
          <input type="text" id="shelfdescr" name="shelfdescr" placeholder="shelfdescr"/>
          <input type="submit" />
        </form>
      );
  }
}
export default CreateShelf;
