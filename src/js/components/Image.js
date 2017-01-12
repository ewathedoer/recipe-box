import React from 'react';

export default class Image extends React.Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.title} className={this.props.className} />
    );
  }
}