import React from 'react';

export default class Instructions extends React.Component {
  render() {
    return (
      <p>
        {this.props.instructions}
      </p>
    );
  }
}