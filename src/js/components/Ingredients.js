import React from 'react';

export default class Ingredients extends React.Component {
  render() {
    return (
      <ul>
        <li>
          {this.props.ingredients}
        </li>
      </ul>
    );
  }
}