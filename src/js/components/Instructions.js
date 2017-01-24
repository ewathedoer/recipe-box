import React from 'react';

export default class Instructions extends React.Component {
  render() {
    return this.props.editable ? 
      (
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea" value={this.props.instructions} onChange={this.props.onChange}></textarea>
          <label htmlFor="textarea1">Instructions</label>
        </div>
      ) :
      (
        <p>
          {this.props.instructions}
        </p>
      );
  }
}