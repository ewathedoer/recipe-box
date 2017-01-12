import React from 'react';

export default class Tags extends React.Component {
  renderTags() {
    let content = [];
    if (this.props.tags) {
      for (let i=0; i<this.props.tags.length; i++) {
        content.push(
          <div className="chip" key={i}>
            {this.props.tags[i]}
            {this.props.editable && <i className="close material-icons">close</i>}
          </div>
        );
      }
    }
    return content;
  }
  render() {
    return (
      <div className={this.props.editable ? 'tags' : 'tags right'}>
        {this.renderTags()}
        {this.props.editable && <div className="chips"></div>}
      </div>
    );
  }
}