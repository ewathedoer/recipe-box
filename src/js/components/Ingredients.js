import React from 'react';

export default class Ingredients extends React.Component {
  render() {
    if (this.props.editable) {
      return (
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea" value={this.props.ingredients} onChange={this.props.onChange}></textarea>
          <label htmlFor="textarea1">Ingredients</label>
        </div>
      ); 
    } else {
      let str = this.props.ingredients;
      str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
      return (
        <p dangerouslySetInnerHTML={{__html: str}}></p>
      );
    }
  }
}