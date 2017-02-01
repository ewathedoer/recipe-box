import React from 'react';

export default class Instructions extends React.Component {
  render() {
    if (this.props.editable) {
      return (
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea" value={this.props.instructions} onChange={this.props.onChange}></textarea>
          <label htmlFor="textarea1">Instructions</label>
        </div>
      );
    } else {
      let str= this.props.instructions;
      str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
      return (
        <p dangerouslySetInnerHTML={{__html: str}}>
        </p>
      );
    }   
  }
}