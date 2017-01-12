import React from 'react';

export default class Tags extends React.Component {
  renderTags() {
    let content = [];
    for (let i=0; i<this.props.tags.length; i++) {
      content.push(
        <div className="chip" key={i}>
          {this.props.tags[i]}
        </div>
      );
    }
    return content;
  }
  render() {
    return (
      <div className="tags right">
        {this.renderTags()}
      </div>
    );
  }
}