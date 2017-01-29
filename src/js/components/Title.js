import React from 'react';

export default class Title extends React.Component {
  render() {
    return this.props.editable ?
      (
        <div className="input-field">
          <input id="recipe-title" type="text" className="validate" value={this.props.title} onChange={this.props.onChange} />
          <label className="active" htmlFor="recipe-title">Title</label>
        </div>
      ) :
      (
        <div className={this.props.className}>
          {this.props.title}
        </div>
      );
  }
}