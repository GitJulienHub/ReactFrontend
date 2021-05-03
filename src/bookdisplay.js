import React from 'react';

class CreateShelf extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}


class CreateBook extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class BookRow extends React.Component {
  render() {
    return (
      <tr>
          <td>Dom</td>
          <td>{this.props.value}</td>
      </tr>
    );
  }
}
class BookDisplay extends React.Component {
  renderRow(i) {
    return <BookRow value={i} />;
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
        {this.renderRow(this.props.books)}

      </tbody>
  </table>
    );
  }
}
export default BookDisplay;
