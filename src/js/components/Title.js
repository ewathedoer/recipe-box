import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.title}
      </div>
    );
  }
}