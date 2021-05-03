import React from 'react';

class CreateShelf extends React.Component {
  render() {
    return (
        <form className="hi" noValidate autoComplete="off">
          <input type="text" id="fname" name="shelfDescription" placeholder="shelfDescription"/>
          <input type="text" id="fname" name="bookAuthor" placeholder="bookAuthor"/>
          <input type="submit" id="fname" name="send" />
        </form>
      );
  }
}
export default CreateShelf;
