import React from 'react';

export default class Ingredients extends React.Component {
  render() {
    return this.props.editable ?
      (
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea">{this.props.ingredients}</textarea>
          <label htmlFor="textarea1">Ingredients</label>
        </div>
      ) :
      (
        <ul>
          <li>
            {this.props.ingredients}
          </li>
        </ul>
      );
  }
}