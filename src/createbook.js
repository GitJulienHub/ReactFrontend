import React from 'react';

class CreateBook extends React.Component {
  render() {

    return (
        <form className="hi" noValidate autoComplete="off">
          <input type="text" id="fname" name="bookName" placeholder="bookName"/>
          <input type="text" id="fname" name="bookAuthor" placeholder="bookAuthor"/>

          <select name="shelfs" id="shelfs">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input type="submit" id="fname" name="send" />
        </form>
      );
  }
}
export default CreateBook;
